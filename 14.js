// Ikkiga ko'paytir 
// Har bir elementni 2 ga ko'paytiring. Misol: [1,2,3] -> [2,4,6].
function kopaytir(numbers,target){
    let result = [];
    for ( let i = 0; i < numbers.length; i++){
        numbers[i]*target
        result.push(numbers[i]*target);
    }
    return result;
}
console.log(kopaytir([1,2,3],2))