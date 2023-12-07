import { findFirstRepeated } from './main'
import { describe, it, expect } from 'vitest'

describe('findFirstRepeated', () => {
  it('should return 3', () => {
    expect(findFirstRepeated([2, 1, 3, 5, 3, 2])).toBe(3)
  })

  it('should return -1', () => {
    expect(findFirstRepeated([1, 2, 3, 4])).toBe(-1)
  })

  it('should return 5', () => {
    expect(findFirstRepeated([5, 1, 5, 1])).toBe(5)
  })
})
