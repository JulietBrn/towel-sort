
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr =[]
  if((matrix != undefined) && matrix.length !=0) {
    for (let i=0; i< matrix.length; i++) {
        if(i==0 || i%2 ==0) {
          newArr.push(...matrix[i])
        } else {
        newArr.push(...(matrix[i].sort((a,b) => b-a)))
        } 
      }    
  } else {return []}
  return [...newArr]
}
