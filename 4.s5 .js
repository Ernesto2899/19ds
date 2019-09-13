let number = 0
let sum
const a = 20
const b = 2
for (let i = 0; i <= a; i++) {
    number += Math.pow(b, i);
}

sum = (Math.pow(b, a + 1) - 1) / (b - 1)

console.log('Sumatory: ', number)
console.log('Formula: ', sum)
