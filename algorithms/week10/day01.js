// findObjectsFilter(searchFor, items)

// given a 'search for' object with primative values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const searchFor = {
    firstName: "Bob",
    age: 31
};

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 }
];

// return a new list of objects containing the same key pair values
const output = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 }
];

function findObjectsFilter(search, items) {
// H4sIALQzd2UAA2XNSwqAMAwE0H1PMe7qxgtIvYi4EEmxWCukcSHi3f1Q8DerDHkhAMAkMwc4oTEW
// 1nkh1meBqbAqpNiJobspRMFAC1xApJa7Pn+YM87iuq4P1SAzJrmrfzHu97b1kcrXdlP/KWnhOeEt
// Vzvi7lAXxQAAAA==
}

console.log(findObjectsFilter(searchFor, items), "should be", output);
