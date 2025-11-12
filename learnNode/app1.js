import readline from 'readline-sync'

let fullName = readline.question("ENTER YOUR NAME :");
console.log(fullName);
let age = readline.questionInt("ENTER YOUR AGE");
console.log(age);
let likes = readline.question("Likes coding  (y/n)");


if (likes === 'Y' || likes === 'y') {
   console.log("likes coding"); 
} else {
    console.log("doesn't like coding");
}

let gender = readline.question("ENTER YOUR GENDER (M/F/O)");


if (gender === 'M' || gender === 'm') {
    console.log("Male");
} else if (gender === 'F' || gender === 'f'){
    console.log("Female");
} else {
    console.log("invalid");
}


console.log(gender);

let student = readline.question("Are you a student?");


if (student === 'Y' || student === 'y' || student === 'yes') {
   console.log("Yes"); 
} else {
    console.log("No");
}


console.log(student);



 let pet = readline.question("Do you have a pet? (If yes, name it or type 'No'");


 if (pet === 'No' || pet === 'N' || pet === 'no') {
    console.log("No pet"); QQ~~~
 } else {
     console.log(`Yes, it is ${pet}`);
 }



let city = readline.question("ENTER YOUR CITY :");
console.log(city);

let country = readline.question("ENTER YOUR COUNTRY :");
console.log(country);

let email = readline.questionEMail("ENTER YOUR EMAIL :");
console.log(email);

let phone = readline.questionInt("ENTER YOUR PHONE :")
console.log(phone);

let occupation = readline.question("What is your occupation?")
console.log(occupation);

let hobby = readline.question("ENTER YOUR FAVOURITE HOBBY: ")
console.log(hobby);

let lang = readline.question("ENTER YOUR FAVORITE PROG. LANG")
console.log(lang);

let years = readline.questionInt("YEARS OF CODING EXPERIENCE : ")
console.log(years);

let food = readline.question("ENTER YOUR FAVORITE FOOD : ")
console.log(food);

let movie = readline.question("ENTER YOUR FAVORITE MOVIE :");
console.log(movie);

let color = readline.question("ENTER YOUR FAVORITE COLOR :");
console.log(color);

