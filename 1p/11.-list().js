const x = [3,4,5,3,1,4,7,8]
function aar (array) {
    let num = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < i; j++) {            
            if (array[i]===array[j]){  
               num.push(array[i])
            } 
        } 
    } 

    return num
}

console.log("the numbers that are reapeted are : ", aar(x))