const Caesarcipher = require('./caesarCipher')


test('takes a string and returns each character shifted one', () => {
    const cipher = new Caesarcipher()
    expect(cipher.createCipher('this is a caesar cipher! isn\'t it?')).toMatch(/uijt jt b dbftbs djqifs! jto\'u ju?/)
})
