"use strict";
// Spread
const hobies = ['Swimming', 'Reading'];
const hobbies = [...hobies, 'Walking'];
console.log(hobbies);
console.log("hero");

// Rest
function add(...numbers) {
    return numbers.reduce((current, value) => {
        return current + value;
    }, 0);
}
console.log(add(3,4,5,5,6,6,6,6,6,6,6,6,6,6,78,90,23,4));


// Destruturing Array
const [hobby1, hobby2, rest] = hobbies;
console.log(hobby1, hobby2, rest);


//Destructuring Object

const person={
    firstname:'Jonathan',
    age:28,
    profession :'Senior FullStack Engineeer'
}

const{ firstname, age, profession} = person
console.log(firstname,age,profession)




