const uniquePaths = require('../../dist/dp/p62.js').uniquePaths;
const assert = require('assert');
describe('[p62]unique-paths', function () {
  it('example1', function () {
    const result = uniquePaths(3, 2)
    assert.equal(result, 3)
  })
  it('example2', function () {
    const result = uniquePaths(7, 3)
    assert.equal(result, 28)
  })
})