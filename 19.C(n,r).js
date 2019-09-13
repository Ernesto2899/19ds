function factorial  (x)  {
    let a = 1

    for ( let i = 1; i <= x; i++ ) {
        a = a * i
    } 

    return a
}

function num  (x, r)  {
    return (factorial(x)) / factorial((x - r))
}

function Com  (x, r)  {
    return num(x, r) / factorial(r)
}

console.log(Com(43, 3))
