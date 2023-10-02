/// The age to verify if the rider is old enough.
/// Minimum: 10
const age = 11;

/// The height in inches to verify if the rider is tall enough.
/// Minimum: 42
const height = 37;


if (age < 10 || height < 42) {
	console.log("You cannot ride the roller coaster");
}
else {
	console.log("You can ride the roller coaster");
}
