// Yig'indi
// Massivdagi barcha sonlar yig'indisini hisoblang. Misol: [10,20,30] -> 60.
function add(numbers){
    let sum = 0;

    for (let i = 0; i < numbers.length; i++){
        sum = sum + numbers[i];    
    }
    return sum;
}
console.log(add([10,20,30]));