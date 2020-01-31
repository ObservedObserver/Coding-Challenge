const climbStairs = require('../../dist/dp/p70.js').climbStairs;
const assert = require('assert');
describe('[p70]', function () {
  it('example1', function () {
    const result = climbStairs(2)
    assert.equal(result, 2)
  })
  it('example2', function () {
    const result = climbStairs(3)
    assert.equal(result, 3)
  })
})