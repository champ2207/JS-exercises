// Maksimal ayirma 
// Massivdagi eng katta va eng kichik son ayirmasini toping. Misol: [3,1,9,4] -> 8.
function minus(arr){
    let max = arr[0]
    let min = arr[0]
    for ( let i = 1; i < arr.length; i++){
        if (max < arr[i]){
            max = arr[i]
        } else {
            if( min > arr[i]){
                min = arr[i]
            }
        }
    }
    return max - min; 
}
console.log(minus([3,1,9,4]))