import chalk from 'chalk';

console.log(chalk.blue('===================================================');
console.log('📷 Instagram Login Page ');           
console.log('===================================================');


let username = readline.question("Enter your username : ")


let password = readline.question("Enter your password : ", {
    hideEchoBack: true,
});

console.log('\nChecking credentials...\n');


if (username === 'suhail' && password === '12345') {
    console.log('Login Successfully');
    console.log(`Welcome back, ${username}`);
} else {
    console.log('Login Failed!');
    console.log('Invalid username or password.');
}

console.log('\nThank you for using Instagram CLI\n');
