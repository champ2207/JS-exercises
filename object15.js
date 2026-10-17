// Ikki xossani almashtir 
// Obyektdagi ikki xossa qiymatini almashtiring. Misol: {a:1,b:2} -> {a:2,b:1}.
function smth(obj){
    let vaqtincha = obj.a
    obj.a = obj.b
    obj.b = vaqtincha
    return obj
}
console.log(smth({a:1,b:2}))