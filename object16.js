// Qiymatlar yig'indisi
// Obyektdagi barcha son qiymatlar yig'indisini hisoblang. Misol: {a:10,b:20,c:30} -> 60.
function smth(obj){
    let sum = 0
    for ( let key in obj){
        if (typeof obj[key] === "number") { sum += obj[key] }
    }
    return sum
}
console.log(smth({a:10,b:20,c:30}))