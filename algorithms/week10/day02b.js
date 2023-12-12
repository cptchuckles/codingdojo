/* 
  Recreate Object.entries() method
  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
  Bonus: Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
  name: "Pizza",
  calories: 9001,
};
const expected1 = [["name", "Pizza"], ["calories", 9001]];

const obj2 = {
  firstName: "Foo",
  lastName: "Bar",
  age: 99,
};
const expected2 = [
  ["firstName", "Foo"],
  ["lastName", "Bar"],
  ["age", 99],
];

// bonus - uncomment
obj1.__proto__ = obj2;

// decide your ALGO roles:
// 1. DRIVER 🚗
// 2. PRESENTER 👩‍🏫👨‍🏫
// 3. NAVIGATOR 🧭

function entries(obj) {
    const result = [];

    //loop over keys
    for (const key in obj) {
        //check if key is the object's own (Object.hasOwnProperty() or w/e)
        if (Object.hasOwn(obj, key)) {
            //push to array if so
            result.push([key, obj[key]]);
        }
    }

    return result;
}

console.log(entries(obj1), "should be", expected1);
console.log(entries(obj2), "should be", expected2);
