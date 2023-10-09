function printOdds() {
	for (let i=1; i<=20; i+=2) {
		console.log(i);
	}
}
printOdds();

function descendingMultiplesOf3() {
	for (let i=100; i>=0; i--) {
		if (i % 3 === 0) {
			console.log(i);
		}
	}
}
descendingMultiplesOf3();

function printSequence() {
	for (let i=4; i>-4; i-=1.5) {
		console.log(i);
	}
}
printSequence();

function sigma() {
	let sum = 0;
	for (let i=0; i<=100; i++) {
		sum += i;
	}
	console.log(sum);
}
sigma();

function factorial() {
	let product = 1;
	for (let i=1; i<=12; i++) {
		product *= i;
	}
	console.log(product);
}
factorial();
