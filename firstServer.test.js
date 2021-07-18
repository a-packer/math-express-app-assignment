const {getMean, get, getMode, getMedian} = require("./math");


describe('get a mean value', function() {
    test('returns a mean from nums', function() {
      const res = getMean([1,2,3]);
      expect(res).toEqual(2)
    })
  })

describe('get a median value', function() {
    test('returns a median from an even number of nums', function() {
        const res = getMedian([1,2,3,4,5,6]);
        expect(res).toEqual(3.5)
    })
    test('returns a median from an odd number of nums', function() {
        const res = getMedian([1,2,3,4,5]);
        expect(res).toEqual(3)
    })
})

describe('get a mode valude from a set of nums', function() {
    test('returns num that is most common', function() {
        const res = getMode([1,3,2,3,4,5,3,5]);
        expect(res).toEqual(3)
    })
})