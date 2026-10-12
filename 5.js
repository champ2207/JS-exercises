// Toq sonlar
// Massivdan faqat toq sonlarni ajratib oling. Misol: [1,2,3,4,5] -> [1,3,5]
function toqSon(numbers){
    let toqSonlar = []

    for ( i = 0; i < numbers.length; i++){
        if ( numbers[i] % 2 === 1){
            toqSonlar.push(numbers[i]);
        }
    }
    return toqSonlar;
}
console.log(toqSon([1,2,3,4,5]))