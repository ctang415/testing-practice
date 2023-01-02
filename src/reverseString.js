function reverseString(string) {
    const stringLength = string.length;
    let newString = '';
    for (let i = stringLength-1; i >= 0; i--) {
        newString += string.charAt(i)
    }
    return newString;
}
module.exports = reverseString;