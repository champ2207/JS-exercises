// Teskari aylantir 
// reverse() ishlatmasdan massivni teskari aylantiring. Misol: [1,2,3] -> [3,2,1].
function teskari(numbers){
    let teskariSonlar = [];

    for ( let i = numbers.length-1; i >= 0;i--){
        teskariSonlar.push(numbers[i])
    }
    return teskariSonlar;
}
console.log(teskari([1,2,3]))