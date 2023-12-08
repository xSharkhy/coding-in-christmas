import { findNaughtyStep } from './main'
import { describe, it, expect } from 'vitest'

describe('findNaughtyStep', () => {
  it('should return \'e\'', () => {
    expect(findNaughtyStep('abcd', 'abcde')).toEqual('e')
  })

  it('should return \'f\'', () => {
    expect(findNaughtyStep('stepfor', 'stepor')).toEqual('f')
  })

  it('should return \'\'', () => {
    expect(findNaughtyStep('abcde', 'abcde')).toEqual('')
  })
})
