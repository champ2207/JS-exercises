// Eng kichik son
// Sonlar massividan eng kichik sonni qaytaring. Misol: [4,2,8,1] -> 1.
function findMin(numbers){
    let result = numbers[0];

    for ( let i = 1; i < numbers.length; i++){
        let current = numbers[i]
        if (current < result){
            result = current
        }
    }
    return result;
}
console.log(findMin([4,2,8,1]));