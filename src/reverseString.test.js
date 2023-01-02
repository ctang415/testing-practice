const reverseString = require('./reverseString')

test('takes a string and reverses it', () => {
    expect(reverseString('happy')).toMatch(/yppah/)
})

test('takes a string and reverses it', () => {
    expect(reverseString('i am happy')).toMatch(/yppah ma i/)
})