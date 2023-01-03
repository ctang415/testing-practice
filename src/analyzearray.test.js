const analyzeArray = require('./analyzearray')

test('takes an array and returns an object with average', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4)
})

test('takes an array and returns an object with min', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1)
})

test('takes an array and returns an object with max', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8)
})

test('takes an array and returns an object with length', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6)
})
