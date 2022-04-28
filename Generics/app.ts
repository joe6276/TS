

//Built in Generics


// let names:string[]=['Jonathan', "Fredrick", 'Francisca']

// let mynames:Array<string>=['Jonathan', "Fredrick", 'Francisca']

// console.log(names);
// console.log(mynames);


// const promise: Promise<string>= new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//             resolve('My data')
//     }, 2000)

// })

// promise.then(data=>{
//     console.log(data);
//     console.log(data.split(''));
    
    
// })



// function merge <T extends object,U extends object> (ObjA:T, ObjectB:U){
// return Object.assign(ObjA, ObjectB)
// }

// let merged =merge({name:'Joe', hobbies:['Coding', 'Reading', 'Gaming']}, {age:35})
// for(let item of merged.hobbies){
//     console.log(item);
    
// }
// console.log(merged.age);

// interface lengthy{
//     length:number
// }
// function countandDescribe<T extends lengthy>( element:T):[T,string]{

//     let des="Got no Value"

//     if(element.length===1){
//         des='Got ' +element.length + ' Element' 
//     }
//     if(element.length>1){
//         des='Got ' +element.length + ' Elements' 
//     }

//     return[element, des]

// }

// console.log(countandDescribe('d'));



// function check<T extends object, U extends keyof T>(Obj: T, key:U){

//     return 'Value is '+ Obj[key]
// }


// console.log(check({name:'Joe'},'name'));



class DataStore <T extends string |number>{
private data:T[]=[]

addItem(item :T){
    this.data.push(item)
}

removeItem(item: T){
 this.data.splice(this.data.indexOf(item), 1)
}
getData(){
    return[ ...this.data]
}

}


const ds= new DataStore<string|number>()
ds.addItem(12)
ds.addItem('Joe')
ds.addItem(15)
ds.addItem('Josh')
ds.addItem(42)
ds.addItem('Jonah')
ds.removeItem('Joe')
ds.removeItem(12)

console.log(ds.getData());


interface Goal{
    title:string
    des:string
    complete:Date
}


function createGoal(  title:string ,des:string ,complete:Date){
let goal: Partial<Goal>={}

goal.title=title
goal.des=des
goal.complete=complete

return goal as Goal

}

console.log(createGoal('First goal', 'Here goes my goals ....', new Date()));



const names: Readonly <string[]>= ['Joe',"Jonathan", "Ndambuki"]




