import * as fs from 'node:fs/promises'

const input = await fs.readFile('input.txt', 'utf-8').then((data) => data.split('\r\n'))
const ASTERISKS = {
  cell: {
    coords: [],
    values: []
  }
}

const GEAR_RATIOS_PART_1 = input => {
  const SYMBOLS = new Set()
  const NUMBERS = []

  input.forEach(line => {
    const chars = line.split('')
    chars.map(char => char !== '.' && isNaN(char)
      ? SYMBOLS.add(char)
      : null)
  })

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (!isNaN(input[i][j])) {
        const MATRIX = []
        let transposed
        let k = 0
        let number = ''
        const coords = [i - 1, j - 1]
        MATRIX[k] = []

        MATRIX[k][0] = input?.[i - 1]?.[j - 1] ?? '.'
        MATRIX[k][1] = input?.[i]?.[j - 1] ?? '.'
        MATRIX[k][2] = input?.[i + 1]?.[j - 1] ?? '.'

        while (true) {
          k++
          number += input[i][j]
          if (!MATRIX[k]) MATRIX[k] = []

          MATRIX[k][0] = input?.[i - 1]?.[j] ?? '.'
          MATRIX[k][1] = input?.[i][j] ?? '.'
          MATRIX[k][2] = input?.[i + 1]?.[j] ?? '.'
          j++

          if (isNaN(input[i][j])) {
            MATRIX[k + 1] = []
            MATRIX[k + 1][0] = input?.[i - 1]?.[j] ?? '.'
            MATRIX[k + 1][1] = input?.[i]?.[j] ?? '.'
            MATRIX[k + 1][2] = input?.[i + 1]?.[j] ?? '.'

            transposed = MATRIX[0].map((col, i) => MATRIX.map(row => row[i]))

            if (transposed.some(row => row.some(cell => cell === '*'))) {
              for (let l = 0; l < transposed.length; l++) {
                for (let m = 0; m < transposed[l].length; m++) {
                  if (transposed[l][m] === '*') {
                    coords[0] += l
                    coords[1] += m
                    ASTERISKS.cell.coords.push(coords.toString())
                    ASTERISKS.cell.values.push(number)
                  }
                }
              }
            }

            break
          }
        }

        NUMBERS.push(transposed)
      }
    }
  }

  const resultPartOne = NUMBERS
    .map(matrix => matrix.map(row => row.join('')).join(''))
    .filter(l => l.match(`[${Array.from(SYMBOLS).join('')}]`))
    .map(l => l.replace(/\D/g, ''))
    .map(l => parseInt(l, 10))
    .reduce((a, b) => a + b)

  const values = ASTERISKS.cell.coords
    .map((coord, index) => [
      JSON.stringify(coord.split(',').map(i => parseInt(i))),
      parseInt(ASTERISKS.cell.values[index])
    ])

  const uniqueValues = [...new Map(values).keys()]
    .map(key => {
      return [key, values.filter(l => l[0] === key).map(l => l[1])]
    })
    .filter(l => l[1].length === 2)

  const resultPartTwo = uniqueValues
    .map(l => l[1].reduce((a, b) => a * b))
    .reduce((a, b) => a + b)

  return [resultPartOne, resultPartTwo]
}

const [one, two] = GEAR_RATIOS_PART_1(input)
console.log(`Day 3, Part 1: ${one}`)
console.log(`Day 3, Part 2: ${two}`)
