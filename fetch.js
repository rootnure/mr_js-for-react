const person = {
    name: 'Alif',
    age: 25,
    skills: ['HTML', 'CSS', 'JS', 'React'],
    address: {
        present: {
            area: 'mirpur',
            city: 'dhaka',
            state: null,
            country: 'BD'
        },
        permanent: {
            area: 'kushtia',
            city: 'khulna',
            state: null,
            country: 'BD'

        },
        email: 'intern006@alif.bd',
    },
    role: 'intern',
}

// // stringify
// const personString = JSON.stringify(person);
// console.log(personString);
// // parse
// const personObj = JSON.parse(personString);
// console.log(personObj);

// // fetch using chaining method
// fetch("url")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error)) // optional
//     .finally(alwaysRun => console.log(alwaysRun)) // optional

// // keys
// const objKeys = Object.keys(person);
// console.log(objKeys);

// // values
// const objValues = Object.values(person);
// console.log(objValues);

