/// The age to verify if the rider is old enough.
/// Minimum: 10
const age = 11;

/// The height in inches to verify if the rider is tall enough.
/// Minimum: 42
const height = 37;


if (height >= 42 || age >= 10) {
	console.log("Get on that ride, kiddo!");
}
else {
	console.log("Sorry kiddo. Maybe next year.");
}
