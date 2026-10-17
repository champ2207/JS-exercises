// Xossani o'chir 
// Obyektdan berilgan xossani delete bilan o'chiring. Misol: ({a:1,b:2},'b') -> {a:1}.
// const telefon = {
//     nomi : "iphone17",
//     xotirasi : 128,
//     rangi : "blue"
// }
// delete telefon.rangi
// console.log(telefon)
function deleteObject(kalit,obj){
    delete kalit[obj]
    return obj
}
console.log(deleteObject({a:1,b:2},'b'))