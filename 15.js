// Manfiylarni sana 
// Massivdagi manfiy sonlar sonini hisoblang. Misol: [-1,-2,3,4] -> 2.
function minusNum(numbers){
    let minusNumbers = 0;
    for ( let i = 0; i < numbers.length; i++){
        if (numbers[i] < 0){
            minusNumbers = minusNumbers + 1;
        }
    }
    return minusNumbers;
}
console.log(minusNum([-1,-2,3,4]))