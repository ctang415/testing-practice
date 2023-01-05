function Caesarcipher() {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    this.createCipher = (string, shift) => {
        let newString = '';
        let stringLength = string.length
        for (let i = 0; i < stringLength; i++) {
            if (!this.alphabet.includes(string.charAt(i)) && this.alphabet.includes((string.charAt(i).toLowerCase()))) {
                let shiftedLowerCaseIndex = this.alphabet.indexOf((string.charAt(i).toLowerCase())) + shift
                if (shiftedLowerCaseIndex > 25) {
                    shiftedLowerCaseIndex = shiftedLowerCaseIndex % 26
                } 
                newString += this.alphabet[shiftedLowerCaseIndex].toUpperCase()
            } else if (!this.alphabet.includes(string.charAt(i))  && !this.alphabet.includes(string.charAt(i).toLowerCase())) {
                newString += string.charAt(i)
            } else if (this.alphabet.indexOf(string.charAt(i)) !== undefined) {
            let shiftedChar = this.alphabet.indexOf(string.charAt(i)) + shift
            if (shiftedChar > 25) {
                shiftedChar = shiftedChar % 26
            } 
            newString += this.alphabet[shiftedChar]
            }
        }
        return newString;
    }
}

module.exports = Caesarcipher