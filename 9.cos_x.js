


function fact  (x)  {
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
function cosX  (z)  {
let sum = 1
let top = 15

for (let i = 2, c = 2; c <= top; i += 2, c++) {
  sum += number(c) * (Math.pow(z, i) / fact(i));
}
return sum;
};

console.log(cosX(7));