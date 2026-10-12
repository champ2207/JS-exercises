// Element bormi?
// Massivda berilgan element bor-yo'qligini true/false qaytaring. Misol: ([5,8,2],8) -> true.
function elementTop(numbers,target){
    for ( let i = 0; i < numbers.length; i++){
        if(numbers[i]===target){
            return true;
    }
}
    return false;
} 
console.log(elementTop([5,8,2],8))