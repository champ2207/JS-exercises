// Juft sonlar
// Massivdan faqat juft sonlarni ajratib oling. Misol: [1,2,3,4,5,6] -> [2,4,6].
function juftSon(numbers){
    let juftSonlar = []

    for ( i = 0; i < numbers.length; i++){
    if ( numbers[i] % 2 === 0){
        juftSonlar.push(numbers[i])
    }
}
    return juftSonlar;
}
console.log(juftSon([1,2,3,4,5,6]))