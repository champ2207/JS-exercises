// Musbat/manfiyga ajrat 
// Massivni musbat va manfiy guruhlarga ajrating. Misol: [-1,2,-3,4] ->
// {musbat:[2,4],manfiy:[-1,-3]}.
function collect(arr){
    let minuses = []
    let pluses = []

    for ( let i=0; i < arr.length; i++){
        if ( arr[i] >= 0){
            pluses.push(arr[i])
        }
        else (minuses.push(arr[i]))
    }
    return [minuses,pluses];
} 
console.log(collect([-1,2,-3,4]))
