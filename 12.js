// Elementni qo'sh 
// massiv oxiriga element qo'shing. Misol: ([1,2],3) -> [1,2,3].
function elementqosh(numbers,target){
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] = target){
            numbers.push(target)
        }
    }
    return numbers;
}
console.log(elementqosh(([1,2],3)))
