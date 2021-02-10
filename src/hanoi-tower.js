
module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  const res = Number(Math.pow(2, disksNumber)) - 1;
  return {turns:res,seconds:Math.floor(  res*60*60/turnsSpeed)};
};
