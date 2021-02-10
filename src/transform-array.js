
module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw Error
    const array = [...arr]
    for (let index = 0; index < array.length; index++) {
        let el = array[index]

        if (el === '--double-next') {
            if (typeof array[index + 1]==='undefined') {
                array[index] = null
            } else {
                array[index] = array[index + 1]
            }
            index -= 1
            continue
        }
        if (el === '--double-prev') {
            if (typeof array[index - 1]==='undefined') {
                array[index] = null
            } else {
                array[index] = array[index - 1]
            }
        }
        if (el === '--discard-next') {
            if (typeof array[index + 1]==='undefined') {
                array[index] = null
            } else {
                array[index + 1] = null
                array[index] = null
            }
        }
        if (el === '--discard-prev') {
            if (typeof array[index - 1]==='undefined' || array[index-1]===null) {
                array[index] = null
            } else {
                array[index - 1] = null
                array[index] = null
            }
        }
    }
    return [...array.filter(el=>el !== null)]
};
