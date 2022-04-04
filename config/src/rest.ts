










// Spread

const hobies=['Swimming','Reading']
const hobbies=[...hobies, 'Walking']
// console.log(hobbies);
// console.log("hero");


// Rest

function add(...numbers:number[]){
    return numbers.reduce((current , value)=>{
        return current+value
    },0)
}

//console.log(add(3,4,5,5,6,6,6,6,6,6,6,6,6,6,78,90,23,4));


// Destruturing

const[hobby1, hobby2, ...rest]= hobbies
console.log(hobby1,hobby2, rest)