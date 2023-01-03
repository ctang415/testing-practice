const Caesarcipher = require('./caesarCipher')


test('takes a string and returns each character shifted one', () => {
    const cipher = new Caesarcipher()
    expect(cipher.createCipher(`This is a caesar cipher! Isn\'t it?`)).toMatch(/Uijt jt b dbftbs djqifs! Jto'u ju?/)
})
