// // variable

// // let and const

// let name = 'Roma';
// name = 'Rafid';

// console.log(name);

// const countryName = 'BD';


// if-else (Condition)
// const age = 10;

// if(age > 60 && age < 40) {
//     console.log('elderly');
// }
// else if(age>18) {
//     console.log('adult');
// }
// else {
//     console.log('clild');
// }

// // Array
// const skills = ['HTML', 'CSS', 'JS', 'React'];
// // console.log(skills[2]);

// skills.push('Node.js')
// // console.log(skills);
// skills.pop();
// // console.log(skills);
// skills.unshift('Computer Fundamentals');
// // console.log(skills);
// skills.shift();
// // console.log(skills);
// const newSkills = skills.slice(0, 2);
// // console.log(newSkills);
// skills.splice(0, 1);
// // console.log(skills);

// // loop (for, for...of, for...in)
// for(let index =0; index < 5; index++) {
    //     console.log(index);
// }



// // function
// function add(a, b) {
//     console.log(...arguments);
//     const result = a + b;
//     return result;
// }
// const output = add(1, 5);
// console.log(output);
// console.log(add.length);



// object
const skills = ['HTML', 'CSS', 'JS', 'React'];
const user = {
    id: 1,
    role: 'user',
    age: 25,
    userName: 'user00',
    email: 'user00@user.bd',
    skills: skills.slice(0, 2),
}

user.phone = '+9923423424';

console.log(user);
console.log(user.skills);
console.log(user.skills[0]);
console.log(user["role"]);