    // 4 Bo'sh joylarni olib tashla 
    // Massivdan 'yolg'on' (false, 0, null, '', undefined) qiymatlarni tozalang. Misol: [0,1,false,2,'',3] -> [1,2,3].
    function clean(arr){
        let result = []

        for ( let i = 0; i < arr.length; i++){
            if (!!arr[i]){
                result.push(arr[i])
            }
        }
        return result;
    }   
    console.log(clean([0,1,false,2,'',3]))