import * as fs from 'node:fs/promises'

const input = await fs.readFile('input.txt', 'utf-8').then((data) => data.split('\r\n'))

const SCRATCHCARDS_PART_1 = input => {
  const CARDS = input
    .map(card => card.split(': ')[1].split(' | '))
    .map(card => [card[0].trim().split(/\s+/), card[1].trim().split(/\s+/)])
    .map(([winning, nums]) => nums.filter(num => winning.includes(num)))
    .map(nums => nums.length)
    .filter(num => num > 0)
    .reduce((acc, cur) => acc + (2 ** (cur - 1)), 0)

  return CARDS
}

const SCRATCHCARDS_PART_2 = input => {
  const CARDS = []
  for (let i = 0; i < input.length; i++) {
    CARDS.push({ id: i + 1, repeat: 1 })
  }
  for (const card of input) {
    const { id, winning, nums } = card.match(/(?<id>\d+): (?<winning>.+) \| (?<nums>.+)/).groups
    const prize = [winning.trim().split(/\s+/), nums.trim().split(/\s+/)]
    const wins = prize[0].filter(num => prize[1].includes(num)).length

    const idNum = Number(id) - 1

    for (let i = idNum + 1; i < idNum + 1 + wins; i++) {
      if (CARDS[i]) {
        CARDS[i].repeat += CARDS[idNum].repeat
      }
    }
  }
  const total = CARDS.reduce((a, c) => a + c.repeat, 0)
  return total
}

console.log('Day 4, Part 1:', SCRATCHCARDS_PART_1(input))
console.log('Day 4, Part 2:', SCRATCHCARDS_PART_2(input))
