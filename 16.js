// Nol bormi? 
// Massivda 0 bor-yo'qligini tekshiring. Misol: [3,0,5] -> true
function searchZero(numbers){
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            return true;
        }
    }     
}
console.log(searchZero([3,0,5]))