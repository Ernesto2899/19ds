
let a = 15
let b = 15

function gcd (n, m) {
   let temp = 0
   
   while (n % m != 0) {
       temp = n % m
       n = m
       m = temp
   }
   return m
}

console.log(gcd(a, b))
