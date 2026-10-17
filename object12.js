// Kalit qiymati 
// Berilgan kalit qiymatini qaytaring, kalit yo'q bo'lsa 'topilmadi'. Misol: ({a:5},'b') -> 'topilmadi'.
function smth(obj,kalit){
    if( kalit in obj){
        return ({a:5},'a')
    }
    return 'topilmadi'
}
console.log(smth({a:5},'b'))