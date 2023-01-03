const Calculator = require('./calculator')

test('adds two numbers', () => {
    const calculator = new Calculator()
    expect(calculator.add(5, 15)).toBe(20)
})

test('subtracts two numbers', () => {
    const calculator = new Calculator()
    expect(calculator.subtract(100, 25)).toBe(75)
})

test('multiplies two numbers', () => {
    const calculator = new Calculator()
    expect(calculator.multiply(20, 3)).toBe(60)
})

test('divides two numbers', () => {
    const calculator = new Calculator()
    expect(calculator.divide(99, 3)).toBe(33)
})
