const Calculator = {
    add: (a, b) => {
        return a + b
    },
    subtract: (a, b) => {
        return a - b
    },
    multiply: (a, b) => {
        return a * b
    },
    divide: (a, b) => {
        if (b === 0) {
            return "Can't divide by 0"
        } else {
        return a/b
        }
    }
}

module.exports = Calculator