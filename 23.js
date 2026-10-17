// Saralash (kamayish) 
// Sonlarni kamayish tartibida saralang. Misol: [1,3,2] -> [3,2,1].
function growth(numbers) {
  return [...numbers].sort((a, b) => b - a);
}
console.log(growth([3, 1, 2])); 