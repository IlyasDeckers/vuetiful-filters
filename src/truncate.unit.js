/* eslint-disable */
import { truncate } from './truncate'

describe('./truncate', () => {
  describe('truncates a string', () => {
    it('truncates 15 characters with ...', () => {
      const result = truncate('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque mollis diam nec rhoncus.', 15, '...')
      expect(result).toEqual('Lorem ipsum dol...')
    })

    it('truncates 15 characters and falls back to the default clamp', () => {
      const result = truncate('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque mollis diam nec rhoncus.', 15)
      expect(result).toEqual('Lorem ipsum dol...')
    })

    it('truncates no characters on string with less than th specified characters', () => {
      const result = truncate('Lorem ipsum.', 15)
      expect(result).toEqual('Lorem ipsum.')
    })
  })
})
