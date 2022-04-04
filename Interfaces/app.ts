

// interface Person{
//     name:string ;
//     age:number;

//    greet(phrase:string):void
// }

// let user1:Person

// user1={

//     name:'Africa',
//     age:23,

//     greet(phrase){
//         console.log(phrase +' ' + this.name)
//     }

// }
// user1.greet('Good Morning')
// console.log(user1)

//Interfaces can be implemented in a class


// interface Greetable{
//     readonly names:string ;
//    greet(phrase:string):void
// }


// class Person implements Greetable{
//     names: string;
//     constructor(n :string){
//         this.names=n
//     }
//     greet(phrase: string): void {
//         console.log(phrase +' ' + this.names)
//     }
// }


// const user2:Greetable= new Person('Joan')
// // user2.names='Roy'
// user2.greet("Hello , ")

// // Inheritance 
// interface TheName{
//     readonly names:string ;
//     opt?:string
   
// } 
// interface Greetable extends TheName {
//    greet(phrase:string):void
// }


// class Person implements Greetable, TheName{
//      names: string;
//     //  name:string ="Joe"
//     constructor(n :string){
//         this.names=n
//     }
//     greet(phrase: string): void {
//         console.log(phrase +' ' + this.names)
//     }
// }


// const user2:Greetable= new Person('Joan')
// // user2.names='Roy'
// user2.greet("Hello , ")

//Interface as Function type

//type AddFnn = (a:number, b :number)=> number
interface AddFnn{
    (a:number, b:number):number
}
let add :AddFnn

 add=(n1:number, n2:number)=>{
     return n1+n2
}

console.log(add(1452,134));
