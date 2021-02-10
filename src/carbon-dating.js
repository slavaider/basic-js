
const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(activity) {
  if(typeof activity ==='undefined' || typeof activity !=='string' || isNaN(activity/0) || +activity>15 || +activity<0) {
    return false
  }
  const n = Math.log(MODERN_ACTIVITY / +activity)
  const k = 0.693 / HALF_LIFE_PERIOD
  return Math.ceil(n / k)
};
