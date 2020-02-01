const longestPalindrome = require('../../dist/dp/p5.js').longestPalindrome;
const assert = require('assert');
describe('[p5]', function () {
  describe('iteration', function () {
    it('example1', function () {
      const result = longestPalindrome.iteration('babad')
      assert.equal(['bab', 'aba'].includes(result), true)
    })
    it('example2', function () {
      const result = longestPalindrome.iteration('cbbd')
      assert.equal(result, 'bb')
    })
    it('example3', function () {
      const result = longestPalindrome.iteration('aaaa')
      assert.equal(result, 'aaaa')
    })
    it('empty value', function () {
      const result = longestPalindrome.iteration('')
      assert.equal(result, '')
    })
  })
  describe('recursion', function () {
    it('example1', function () {
      const result = longestPalindrome.recursion('babad')
      assert.equal(['bab', 'aba'].includes(result), true)
    })
    it('example2', function () {
      const result = longestPalindrome.recursion('cbbd')
      assert.equal(result, 'bb')
    })
    it('example3', function () {
      const result = longestPalindrome.recursion('aaaa')
      assert.equal(result, 'aaaa')
    })
    it('empty value', function () {
      const result = longestPalindrome.recursion('')
      assert.equal(result, '')
    })
  })
  describe('centerSpread', function () {
    it('example1', function () {
      const result = longestPalindrome.centerSpread('babad')
      assert.equal(['bab', 'aba'].includes(result), true)
    })
    it('example2', function () {
      const result = longestPalindrome.centerSpread('cbbd')
      assert.equal(result, 'bb')
    })
    it('example3', function () {
      const result = longestPalindrome.centerSpread('aaaa')
      assert.equal(result, 'aaaa')
    })
    it('empty value', function () {
      const result = longestPalindrome.centerSpread('')
      assert.equal(result, '')
    })
  })
})