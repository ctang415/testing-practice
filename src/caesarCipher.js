function Caesarcipher(string) {
    this.alphabet = {
        a: "b",
        b: "c",
        c: "d",
        d: "e",
        e: "f",
        f: "g",
        g: "h",
        h: "i",
        i: "j",
        j: "k",
        k: "l",
        l: "m",
        m: "n",
        n: "o",
        o: "p",
        p: "q",
        q: "r",
        r: "s",
        s: "t",
        t: "u",
        u: "v",
        v: "w",
        w: "x",
        x: "y",
        y: "z",
        z: "a"
    }
    this.createCipher = (string) => {
        let newString = '';
        const stringLength = string.length
        for (let i = 0; i < stringLength; i++) {
            let stringCharacter = string.charAt(i)
            let lowerCharacter = string.charAt(i).toLowerCase()
            if (!this.alphabet[stringCharacter] && this.alphabet[lowerCharacter]) {
                let character = this.alphabet[lowerCharacter]
                newString += character.toUpperCase()
             } else if (!this.alphabet[stringCharacter]) {
                newString += string.charAt(i)
            } else {
            newString += this.alphabet[stringCharacter]
            }
        }
        return newString;
    }
}

module.exports = Caesarcipher