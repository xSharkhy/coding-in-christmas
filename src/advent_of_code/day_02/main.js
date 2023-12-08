import * as fs from 'node:fs/promises'

const input = await fs.readFile('input.txt', 'utf-8').then((data) => data.split('\r\n'))

const CUBE_CONUNDRUM_PART_1 = input => {
  const colorLimits = {
    red: 12,
    green: 13,
    blue: 14
  }

  const wrongGameIDs = []

  input.forEach(line => {
    const [id, cubes] = line.split(': ')
    cubes.split(/,|;/).forEach(set => {
      const [value, color] = set.trim().split(' ')

      if (value > colorLimits[color]) {
        wrongGameIDs.push(parseInt(id.split(' ')[1]))
      }
    })
  })

  const total = [...new Set(wrongGameIDs)]

  // 5050 is the sum of the first 100 natural numbers
  // Substracting the sum of the wrong game IDs from 5050
  // gives us the correct game ID
  return 5050 - total.reduce((a, c) => a + c, 0)
}

console.log(`Day 2, Part 1: ${CUBE_CONUNDRUM_PART_1(input)}`)

const CUBE_CONUNDRUM_PART_2 = input => {
  const gameIDs = []

  input.forEach(line => {
    const cubes = line.split(': ')[1]
    const colorValues = {
      red: 0,
      green: 0,
      blue: 0
    }

    cubes.split(/,|;/).forEach(set => {
      const [value, color] = set.trim().split(' ')
      const numericValue = Number(value)

      if (color in colorValues) {
        colorValues[color] = Math.max(colorValues[color], numericValue)
      }
    })

    gameIDs.push(colorValues.red * colorValues.green * colorValues.blue)
  })

  return gameIDs.reduce((a, c) => a + c, 0)
}

console.log(`Day 2, Part 2: ${CUBE_CONUNDRUM_PART_2(input)}`)
