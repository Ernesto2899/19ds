
function factorial  (x)  {
  let a = 1

  for ( let i = 1; i <= x; i++ ) {
      a = a * i
  } 

  return a
}

function number  (i)  {
if (i % 2 === 0) return -1;
else return 1;
};

function senX  (n) {
let sum = 0;
let num = 15
for (let i = 1, c = 1; c <= num; i += 2, c++) {
  sum += number(c) * (Math.pow(n, i) / factorial(i));
}
return sum;
};

console.log(senX(9));

