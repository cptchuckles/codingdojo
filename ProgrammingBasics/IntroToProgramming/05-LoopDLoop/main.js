// We need a loop because a number is counting upwards and we want to avoid duplicating code unnecessarily
// The loop starts at 0, because it counts miles, and at the start, a runner has run 0 miles
// The loop stops at 6, not before 6, because that's the last division by 2 where candy is awarded
// The increment should be 1, because we're counting individual miles
// We need a variable for how many miles have been run, and another variable for runner speed for bonus candy.

const runnerSpeed = 6.0;  //mph

for (let miles = 0; miles <= 6; miles++) {
	if (miles % 2 == 0 && miles > 0) {
		console.log("You get a piece of candy");
	}
}

// Bonus candy
for (let miles = 0; miles <= 6; miles++) {
	if (miles % 2 == 0 && miles > 0 && runnerSpeed > 5.5) {
		console.log("You get a bonus piece of candy");
	}
}
