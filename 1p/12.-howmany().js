const x = [3,2,2]
function aar  (array)  {
    let num = 0
    for (let i = 0; i < array.length; i++) {
        
        for (let j = 0; j < i; j++) {            
           
            if (array[i]===array[j]){  
               num++
            } 
        } 
    } 

    return num
}

console.log('The reapetd numbers are:',aar(x))