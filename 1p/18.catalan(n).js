function factorial  (x)  {
    let r = 1

    for ( let i = 1; i <= x; i++ ) {
        r = r * i
    } 

    return r
}

function cat  (x)  { 
    return factorial(2 * x) / (factorial(x+1) * factorial(x))
}

let x = 9


for(let i = 0; i < x; i++) {
    console.log(cat(i))
}
