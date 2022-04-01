
const person:{
    name:string;
    age:number
    hobbies:(string|number)[]
    role:[number,string]
} ={
    name:'Jonathan',
    age:16,
    hobbies:['Swimming', 'Reading books', 'Coding',3],
    role:[3,"Jonathan"]
}
let languages:string[];

person.role[0]=2
person.role.push('admin')
console.log(person.role);


languages=['engeneering','history', "hdhd"]
console.log(person.name);

for(let hobby of person.hobbies){
    console.log(hobby)
}
