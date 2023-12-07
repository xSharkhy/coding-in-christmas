import { manufacture } from './main'
import { describe, it, expect } from 'vitest'

describe('manufacture', () => {
  it('should return [\'tren\', \'oso\']', () => {
    expect(manufacture(['tren', 'oso', 'pelota'], 'tronesa')).toEqual(['tren', 'oso'])
  })

  it('should return [\'puzzle\']', () => {
    expect(manufacture(['juego', 'puzzle'], 'jlepuz')).toEqual(['puzzle'])
  })

  it('should return []', () => {
    expect(manufacture(['libro', 'ps5'], 'psli')).toEqual([])
  })
})
