/* eslint-disable */
import { initials } from './initials'

describe('./initials', () => {
  describe('converts integer teo currency', () => {
    it('Gets initials for John Doe', () => {
      const result = initials('John Doe')
      expect(result).toEqual('JD')
    })

    it('Gets initials for John Junior Mister Doe', () => {
      const result = initials('John Junior Mister Doe')
      expect(result).toEqual('JJM')
    })
  })
})
