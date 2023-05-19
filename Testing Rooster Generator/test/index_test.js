const assert = require('assert')
const Rooster = require('../index')

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      const expectedResponse = 'moo!'

      const response = Rooster.announceDawn()
      
      assert.strictEqual(response, expectedResponse)
    })
  })
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      const expectedResult = 'string'

      const response = typeof Rooster.timeAtDawn(0)

      assert.strictEqual(response, expectedResult)
    })

    it('throws an error if passed a number less than 0', () => {
      //const expectedResult = 'string'

      //const response = Rooster.timeAtDawn()

      assert.throws(() => {
        Rooster.timeAtDawn(-4)
      }, RangeError)
    })

    it('throws an error if passed a number greater than 23', () => {
      assert.throws(() => {
        Rooster.timeAtDawn(25)
      }, RangeError)
    })

  })

})