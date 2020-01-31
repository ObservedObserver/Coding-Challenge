const maxSubArray = require('../../dist/dp/p53.js').maxSubArray;
const assert = require('assert');
describe('[p35]', function () {
  it('example1', function () {
    const result = maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
    assert.equal(result, 6)
  })
})