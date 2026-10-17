// O'rtacha qiymat 
// Massivdagi sonlarning o'rtacha arifmetigini hisoblang. Misol: [4,8,12] -> 8.
function calculate(numbers){
    let result = 0
    for(let i = 0; i < numbers.length; i++){
        result = result + numbers[i];
    }
    return result / numbers.length;
}
console.log(calculate([4,8,12]))