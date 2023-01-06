const calculator = require('./calculator')

test('adds two numbers', () => {
    expect(calculator.add(5, 15)).toBe(20)
})

test('subtracts two numbers', () => {
    expect(calculator.subtract(100, 25)).toBe(75)
})

test('multiplies two numbers', () => {
    expect(calculator.multiply(20, 3)).toBe(60)
})

test('divides two numbers', () => {
    expect(calculator.divide(99, 3)).toBe(33)
})
