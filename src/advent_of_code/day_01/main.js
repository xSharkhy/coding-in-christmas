import * as fs from 'node:fs/promises'

const input = await fs.readFile('input.txt', 'utf-8').then((data) => data.split('\r\n'))

const TREBUCHET_PART_1 = input => input
  .map(line => parseInt(line.match(/\d/g)[0] + line.match(/\d/g).slice(-1)))
  .reduce((a, c) => a + c, 0)

console.log(`Day 1, Part 1: ${TREBUCHET_PART_1(input)}`)

const TREBUCHET_PART_2 = input => {
  const DIGITS = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  }

  const number = s => {
    if (s.charAt(0) > 0 && s.charAt(0) < 10) {
      return parseInt(s.charAt(0))
    }
    const i = Object.keys(DIGITS).findIndex(digit => s.startsWith(digit))
    return i < 0 ? null : i + 1
  }

  const findDigits = line => {
    let first, last

    for (let i = 0; i < line.length; i++) {
      const n = number(line.slice(i))
      if (n) {
        first = first || n
        last = n
      }
    }

    return [first, last]
  }

  const total = input
    .map(line => parseInt(findDigits(line).join('')))
    .reduce((a, c) => a + c, 0)

  return total
}

console.log(`Day 1, Part 2: ${TREBUCHET_PART_2(input)}`)
