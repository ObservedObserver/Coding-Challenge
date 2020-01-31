const longestPalindrome = require('../../dist/dp/p5.js').longestPalindrome;
const assert = require('assert');
describe('[p35]', function () {
  it('example1', function () {
    const result = longestPalindrome('babad')
    assert.equal(['bab', 'aba'].includes(result), true)
  })
  it('example2', function () {
    const result = longestPalindrome('cbbd')
    assert.equal(['bb'].includes(result), true)
  })
  it('example3', function () {
    const result = longestPalindrome('aaaa')
    assert.equal(result, 'aaaa')
  })
  it('empty value', function () {
    const result = longestPalindrome('')
    assert.equal(result, '')
  })
})