// Yig'indisi K bo'lganlar 
// Yig'indisi K ga teng juftliklarni toping. Misol: ([1,2,3,4],5) -> [[1,4],[2,3]]
function plus(arr,target){
    let result =[]

    for( let i = 0; i < arr.length; i++){
        for( let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === target){
                result.push([arr[i],arr[j]])
            }
        }
    }
    return result;
}
console.log(plus([1,2,3,4],5))