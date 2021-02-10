
module.exports = function countCats(matrix) {
 let sum = 0
  matrix.forEach(arr=>{
    arr.forEach(el=>{
      if(el ==='^^')sum+=1
    })
  })
  return sum
};
