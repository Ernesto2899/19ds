const x = [3,4,5,3,1,4,7,8]
function arr  (array)  {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < i; j++) {            
            if (array[i]===array[j]){
                
               return true
            } 
        } 
    }  
     return false
}

console.log(arr(x))