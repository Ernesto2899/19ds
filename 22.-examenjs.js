
let order = function(array){
for (let i = 1; i < array.length; i++){
    for(let x = 0; x < i; x++){
            if(array[i]<array[x]){
               return true;
        }
    }
}
return false;
}


console.log(order([100,6,11,3,0,2]))