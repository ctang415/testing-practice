const capitalize = require('./capitalize')

test('capitalizes first character of a string', () => {
    expect(capitalize('happy')).toMatch(/Happy/)
})