
module.exports = class DepthCalculator {
    calculateDepth(arr, sum = 0) {
        if (!Array.isArray(arr)) return sum
        const arrays = arr.filter(el => Array.isArray(el))
        const res = arrays.length !== 0? arrays.reduce((a, b) => a.concat(b), []):0
        return this.calculateDepth(res, sum + 1)
    }
};
