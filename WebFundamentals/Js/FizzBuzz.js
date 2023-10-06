function fizzBuzz(count, fizz, buzz) {
	let result = []
	for (let i=1; i<=count; i++) {
		let output = "";
		if (i % fizz === 0) {
			output += "Fizz";
		}
		if (i % buzz === 0) {
			output += "Buzz";
		}
		if (output.length === 0) {
			output = i;
		}
		result.push(output);
	}
	return result;
}

fizzBuzz(100, 3, 5).forEach(line => console.log(line));
