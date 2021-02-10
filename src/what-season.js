
function isMonth(value, a, b, c) {
    return value === a || value === b || value === c
}
module.exports = function getSeason(date) {
    if (typeof (date) === "undefined") return 'Unable to determine the time of year!'
    if (!date instanceof Date && !isNaN(date.valueOf())) throw Error
    const month = date.getUTCMonth()
    if (isMonth(month, 11, 0, 1)) {
        return 'winter'
    }
    if (isMonth(month, 2, 3, 4)) {
        return 'spring'
    }
    if (isMonth(month, 5, 6, 7)) {
        return 'summer'
    }
    if (isMonth(month, 8, 9, 10)) {
        return 'autumn'
    }
};
