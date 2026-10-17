// Takrorlanmas elementlar 
// Takroriy qiymatlarni olib tashlang. Misol: [1,2,2,3,3,3] -> [1,2,3].
function takeExtraNum(numbers){
    const result = [];

    for (let i = 0; i < numbers.length; i++){
        if (!result.includes(numbers[i])){
            result.push(numbers[i]);
        }
    }
    return result;
}
console.log(takeExtraNum([1,2,2,3,3,3]))