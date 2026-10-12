// Indeksni top 
// Berilgan element birinchi marta qaysi indeksda turganini toping. Misol: ([5,8,2],8) -> 1.
function index(numbers,target){
  let result = [];
  for( let i = 0; i < numbers.length; i++){
    if(numbers[i] === target){
      return i;
    }
  }
}
console.log(index([5,8,2],8))