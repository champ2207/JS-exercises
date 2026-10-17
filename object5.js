// Xossalar sonini sana 
// Obyektda nechta xossa borligini qaytaring. Misol: {a:1,b:2,c:3} -> 3.
// const telefon = {
//     nomi : "iphone17",
//     xotirasi : 128,
//     rangi : "blue"
// }
// console.log(Object.keys(telefon).length)
function telefon(smth){
    return Object.keys(smth).length
}
console.log(telefon({a:1,b:2,c:3}))  