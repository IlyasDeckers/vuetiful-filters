/* eslint-disable */
import {number} from './number'

describe('./currency', () => {
  describe('converts integer teo currency', () => {
    it('converts to number with 2 decimals', () => {
      const result = number(123456.789323664545, 2)
      expect(result).toEqual('123,456.79')
    })

    it('converts to number with 3 decimals', () => {
      const result = number(123456.789323664545, 3)
      expect(result).toEqual('123,456.789')
    })

    it('converts to number with 4 decimals', () => {
      const result = number(123456.789323664545, 4)
      expect(result).toEqual('123,456.7893')
    })

    it('converts to number with 5 decimals', () => {
      const result = number(123456.789323664545, 5)
      expect(result).toEqual('123,456.78932')
    })
  })
})
