

// type Admin={
//     name:string;
//     privileges:string[];
// }

// type Employee={
//     name:string;
//     startDate:Date;
// }


// type ElevatedType= Admin & Employee


// const user:ElevatedType={
//     name:"Joe",
//     startDate: new Date(),
//     privileges:['edit', 'read']
// }


// console.log(user)


// type strnum = string| number
// type numbol = number| boolean

// type combined= strnum & numbol


// type elEmployee= Admin | Employee


// function printInfo(emp:elEmployee){
//     console.log(emp.name);
    
//     if( 'startDate' in emp){
//         console.log(emp.startDate);   
//         console.log('This is an Employee');
        
//     }
//     if( 'privileges' in emp){
//         console.log('This is an Admin');
//         console.log(emp.privileges);
//     }
// }


// printInfo({
//     name:"Joe",
//     startDate: new Date(),
// })

//Type Guard

// class Car{
//     drive(){
//         console.log('Driving ...');
        
//     }
// }



// class Truck{
//     drive(){
//         console.log('Driving ...');
        
//     }

//     load(){
//         console.log('Loading...');
        
//     }
// }


// type vehicle= Car | Truck


// function checkVehicle(a:vehicle){
//     a.drive();

//    if(a instanceof Truck){
//        a.load()
//    }
// }
// const v1= new Car()
// const v2= new Truck()
// checkVehicle(v1)



// //Discriminated Union 

// interface Cat{
//     type:'Cat';
//     catSound:string
// }

// interface Dog{
//     type:'Dog';
//     dogSound:string
// }


// type Animal= Cat | Dog

// function checkAnimal(a:Animal){

//     switch(a.type){

    

//     case "Dog":
//         console.log('Dog :'+ a.dogSound);
//         break;

//         case "Cat":
//         console.log('Cat :'+ a.catSound);
//         break;

//         default:
//             console.log('Not found');
//         }       

// }



// checkAnimal(
//     {
//         type:'Dog',
//         dogSound:'Bark'
//     }

// )



//const inpt =<HTMLInputElement> document.getElementById('inputElement')



// const inpt =<HTMLInputElement> document.getElementById('inputElement')! as HTMLInputElement
// inpt.value="Hi there  Again!"

// const inpt =<HTMLInputElement> document.getElementById('inputElement')

// if(inpt){
//     (inpt as HTMLInputElement).value ="Hi there !"
// }

// Function overlOads
// type Stringnum= string | number

// function add(a:number, b:number):number;
// function add(a:string, b:string):string;
// function add(a:number, b:string):string;
// function add(a:string, b:number):string;

// function add( a:Stringnum, b:Stringnum){
//     if( typeof a ==='string'  || typeof b ==='string'){
//         return a.toString() + b.toString()
//     }

//     return a + b
// }

// const result= add('Jonathan', 'Ndambuki')
// console.log(result.split(''));


// Optional Chaining


const fetchedUser={
    id:12,
    name:'Jonathan Ndambuki',
    job :{
        title:'Instructor',
        company:'The Jitu'
    }
}



console.log(fetchedUser.job && fetchedUser.job.title);
