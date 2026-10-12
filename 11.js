// Musbatlar soni 
// Massivda nechta musbat son borligini sanang. Misol: [-1,2,-3,4,5] -> 3
function musbatSon(numbers){
    let musbatSonlar= []
    for ( let i = 0; i < numbers.length; i++){
        if (numbers[i] > 0){
            musbatSonlar.push(numbers[i])
        }
    }
    return musbatSonlar;
}
console.log(musbatSon([-1,2,-3,4,5]))