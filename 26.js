// Ko'paytma 
// Barcha sonlar ko'paytmasini hisoblang. Misol: [2,3,4] -> 24.
function calculate(numbers){
    let sum = 1;

    for ( let i = 0; i < numbers.length; i++){
        sum = sum * numbers[i]
    }
    return sum;
}
console.log(calculate([2,3,4]))