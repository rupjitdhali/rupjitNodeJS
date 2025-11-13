import dotenv from 'dotenv';
dotenv.config(); // loading content from .env 

let email = process.env.EMAIL;
let password = process.env.PASS;
let college = process.env.COLLEGENAME;

console.log(email, password, college);


/*

OS Module in Node.js

Node.js comes with a built-in module called os that provides information about your computer's operating system.

You don't need to install anything - just import it:
ex: import os from 'os'

*/

import os from 'os';

//to identofy which os

console.log(os.platform());

console.log(os.arch());
console.log(os.cpus());
console.log(os.cpus());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.hostname());
console.log(os.type());
console.log(os.version());