// findByIdAndUpdate(id, updateObject, arr)

// Given an id, an object that has keys with corresponding updated values, and an array of objects

// Find the object by "id" key that matches the given id value and then update that object's
// keys with the provided new values.

// Return the updated object, or null if no object was found

const obj = {
    id: 1,
    isLateToday: true
}

const students = [{
    id: 1,
    name: "student1",
    isLateToday: false,
    lateCount: 15,
    redBeltStatus: false
},
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false
    }
];

function findByIdAndUpdate(id, updatedVals, collection) {
    for (const element of collection) {
        if (element.id === id) {
            for (const key in element) {
                element[key] = updatedVals[key] ?? element[key];
            }
            return element;
        }
    }
    return null;
}

studentIndex = students.reduce((index, student) => {
    index[student.id] = student;
    return index;
}, {});
function findByIdAndUpdateIndexed(id, updatedVals, collectionIndex) {
    const element = collectionIndex[id];
    for (const key in element) {
        element[key] = updatedVals[key] ?? element[key];
    }
    return element ?? null;
}

console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));
console.log(findByIdAndUpdateIndexed(3, { redBeltStatus: true }, studentIndex));
// Output: {
//   id: 3,
//   name: "student3",
//   isLateToday: false,
//   lateCount: 0,
//   redBeltStatus: true
// }

console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students));
console.log(findByIdAndUpdateIndexed(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, studentIndex));
// Output: {
//   id: 1,
//   name: "student1",
//   isLateToday: true,
//   lateCount: 16,
//   redBeltStatus: false
// }

console.log(findByIdAndUpdateIndexed(5, {}, studentIndex));
// Output: null

