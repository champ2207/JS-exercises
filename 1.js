//1)Eng katta son
//Sonlar massividan eng katta sonni qaytaring. Misol: [3,9,1,7] -> 9.
function findMax(numbers) {
    let result = numbers[0]; 

    for (let i = 1; i<numbers.length; i++){
        let current = numbers[i] 

        if (current > result) {
            result  = current;
        }
    }
    return result;
}
console.log(findMax([3,9,1,7]));
