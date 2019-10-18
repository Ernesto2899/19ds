let x = prompt('Give me number')

function SUM (x) {
    let X = 0
    let Y = 1
    let Z = 1

    for(let i = 1; i <= x; i++) {
        console.log(Z)
        Z = X + Z
        
        X = Y
        Y = Z
    }
}

SUM(x)