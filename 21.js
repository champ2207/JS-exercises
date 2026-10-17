// Ikkinchi katta son 
// Ikkinchi eng katta sonni toping. Misol: [10,5,8,7,31,20] -> 8.
function maxnumber(arr){
    let max = arr[0]
    let secondmax = arr[0]

    for( let i = 1; i < arr.length; i++){
        if ( max < arr[i]){
            max = secondmax
            max = arr[i]
        }
      else {
        if( secondmax < arr[i]){
          secondmax = arr[i]
        }
      }
    }
    return secondmax;
}
console.log(maxnumber([10,5,8,7,31,20]))