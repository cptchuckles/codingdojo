const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { faker } = require('@faker-js/faker');

const createUser = () => {
	return {
		password: faker.word.words(4),
		email: faker.internet.email(),
		phoneNumber: faker.phone.number(),
		lastName: faker.person.lastName(),
		firstName: faker.person.firstName(),
		_id: faker.number.int(),
	}
}

const createCompany = () => {
	return {
		_id: faker.number.int(),
		name: faker.company.name(),
		address: {
			street: faker.location.streetAddress(),
			city: faker.location.city(),
			state: faker.location.state(),
			zipCode: faker.location.zipCode(),
			country: faker.location.country(),
		},
	}
}

app.get("/api/users/new", (_, res) => res.json(createUser()));

app.get("/api/companies/new", (_, res) => res.json(createCompany()));

app.get("/api/user/company", (_, res) => {
	const user = createUser();
	user.company = createCompany();
	res.json(user);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
