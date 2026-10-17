// Qiymatlarni chiqar
// Object.values bilan barcha qiymatlarni massivga oling.
const telefon = {
    nomi : "iphone17",
    xotirasi : 128,
    rangi : "blue"
}
const kalitlar = Object.values(telefon)
console.log(kalitlar)