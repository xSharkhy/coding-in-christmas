import { decode } from './main'
import { describe, it, expect } from 'vitest'

describe('findNaughtyStep', () => {
  it('should return \'hola mundo\'', () => {
    expect(decode('hola (odnum)')).toEqual('hola mundo')
  })

  it('should return \'hello world!\'', () => {
    expect(decode('(olleh) (dlrow)!')).toEqual('hello world!')
  })

  it('should return \'santaclaus\'', () => {
    expect(decode('sa(u(cla)atn)s')).toEqual('santaclaus')
  })
})
