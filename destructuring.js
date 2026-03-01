// Array Destructuring

const friends = ['JHK', 'MH', 'MAP', 'GU'];

// const friend1 = friends[0];
// const friend2 = friends[1];
// const friend3 = friends[2];

// const [friend1, friend2, friend3] = friends;
// console.log(friend1, friend2, friend3);
const [friend1, , , friend4] = friends;
// console.log(friend1, friend4);


// Object Destructuring
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

        }
    }
}
// const skills = person.skills;
const { skills, name, age } = person;

console.log(skills, name, age);