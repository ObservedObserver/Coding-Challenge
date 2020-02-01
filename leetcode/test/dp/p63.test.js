const uniquePathsWithObstacles = require('../../dist/dp/p63.js').uniquePathsWithObstacles;
const assert = require('assert');
describe('[p62]unique-paths', function () {
  it('example1', function () {
    const result = uniquePathsWithObstacles([
      [0,0,0],
      [0,1,0],
      [0,0,0]
    ])
    assert.equal(result, 2)
  })
})