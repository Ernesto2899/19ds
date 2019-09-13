let ecu = 0
let a=1
function factorial (x) {
	let sum = 1; 
	for (i=1; i<=x; i++) {
		sum = sum * i; 
	}
	return sum; 
}

for(let i = 0; i <= 9;i++){
    ecu += Math.pow(a,i)/factorial(i)

}

console.log(`The formula ${ecu}`) 