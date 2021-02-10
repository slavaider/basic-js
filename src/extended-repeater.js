
module.exports = function repeater(str, {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator}) {
    let res = ''
    for (let i = 0; i < repeatTimes; i++) {
        res += str
        for (let j = 0; j < additionRepeatTimes; j++) {
            res = res + addition
            if (j + 1 !== additionRepeatTimes) res += additionSeparator
        }
        if (i + 1 !== repeatTimes)
            res += separator
    }
    return res
};
