// Ikki saralangan massiv 
// Ikkita saralangan massivni bitta saralangan massivga birlashtiring. Misol: ([1,3],[2,4]) ->[1,2,3,4].
function collect(firstArr,secondArr){
  let result = [...firstArr, ...secondArr];
  return result.sort((x, y) => x - y);
}
console.log(collect([1,3],[2,4]))