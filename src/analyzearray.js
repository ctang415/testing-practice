const analyzeArray = (array) => {
    const obj = {};
    const average = 'average'
    const min = 'min'
    const max = 'max'
    const length = 'length'
    obj[average] = (array.reduce((prev, curr) => prev + curr, 0))/array.length;
    obj[min] = array[0]
    obj[max] = array[0]
    for (let i = 0; i < array.length; i++) {
        if (obj[min] >= array[i]) {
            obj[min] = array[i]
        } else {
            obj[min] = obj[min]
        }
        if(obj[max] <= array[i]) {
            obj[max] = array[i]
        } else {
            obj[max] = obj[max]
        }
    }
    obj[length] = array.length
    return obj
}

module.exports = analyzeArray