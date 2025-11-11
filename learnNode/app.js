// const readline = require('readline-sync')
import readline from 'readline-sync'; //after 2015

let fullName = readline.question('WHat is your Name ? :')
console.log(`My name is ${fullName}`);
let age = readline.questionInt('WHat is your age ? :')
console.log(`My name is ${age}`);
if (age > 150) {
    "Invalid input"
} else {
    console.log(`My name is ${age}`);
}

// let email = readline.question('WHat is your email ? :')
// console.log(`My name is ${email}`);
// let phone = readline.question('WHat is your phone ? :')
// console.log(`My name is ${phone}`);
// let college = readline.question('WHat is your college ? :')
// console.log(`My name is ${college}`)

