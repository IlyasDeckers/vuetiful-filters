/* eslint-disable */
import { currency } from './currency'

describe('./currency', () => {
  describe('converts integer to currency', () => {
    it('falls back to default EUR', () => {
      const result = currency(123456.7893256, 2)
      expect(result).toEqual('€123,456.79')
    })

    it('converts to EUR with 2 decimals', () => {
      const result = currency(123456.7893256, 2, 'EUR')
      expect(result).toEqual('€123,456.79')
    })

    it('converts to EUR with 3 decimals', () => {
      const result = currency(123456.7893256, 3, 'EUR')
      expect(result).toEqual('€123,456.789')
    })

    it('converts to USD', () => {
      const result = currency(123456.789, 2, 'USD')
      expect(result).toEqual('$123,456.79')
    })

    it('converts to GBP', () => {
      const result = currency(123456.789, 2, 'GBP')
      expect(result).toEqual('£123,456.79')
    })
  })
})
