
let number = 0
let sum
const a = 20
const b = 2
let c = 0
for (let i = 1; i <= a; i++) {
    number+= Math.pow(i, b)
}

c = b + 1
sum = ((1 / c) * (Math.pow(a, c)))
console.log('Sumatory: ', number)
console.log('Formula: ', sum)