const Caesarcipher = require('./caesarCipher')

test('checks for cipher shift of 10', () => {
    const cipher = new Caesarcipher()
    expect(cipher.createCipher('shift', 10)).toMatch(/crspd/)
})

test('checks for uppercase', () => {
    const cipher = new Caesarcipher()
    expect(cipher.createCipher('THIS IS UPPERCASE', 5)).toMatch(/YMNX NX ZUUJWHFXJ/)
})

test('checks for punctuation', () => {
    const cipher = new Caesarcipher()
    expect(cipher.createCipher(`this is a caesar cipher! isn\'t it?`, 5)).toMatch(/ymnx nx f hfjxfw hnumjw! nxs'y ny?/)
})
