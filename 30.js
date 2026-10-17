// Eng uzun so'z 
// So'zlar massividan eng uzun so'zni toping. Misol: ['it','olma','non'] -> 'olma'.
function uzun(arr){
    let result = arr[0]

    for ( let i = 1; i < arr.length; i++){
        if(result.length < arr.length){
            result = arr[i];
        }
    }
    return result;
}
console.log(uzun(['it','olma','non']))