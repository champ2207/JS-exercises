// Saralash (o'sish) 
// sort() ishlatmasdan sonlarni o'sish tartibida saralang. Misol: [3,1,2] -> [1,2,3].
function growth(numbers) {
  return [...numbers].sort((a, b) => a - b);
}
console.log(growth([3, 1, 2]));