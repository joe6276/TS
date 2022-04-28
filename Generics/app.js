//Built in Generics
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var DataStore = /** @class */ (function () {
    function DataStore() {
        this.data = [];
    }
    DataStore.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStore.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStore.prototype.getData = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStore;
}());
var ds = new DataStore();
ds.addItem(12);
ds.addItem('Joe');
ds.addItem(15);
ds.addItem('Josh');
ds.addItem(42);
ds.addItem('Jonah');
ds.removeItem('Joe');
ds.removeItem(12);
console.log(ds.getData());
function createGoal(title, des, complete) {
    var goal = {};
    goal.title = title;
    goal.des = des;
    goal.complete = complete;
    return goal;
}
console.log(createGoal('First goal', 'Here goes my goals ....', new Date()));
var names = ['Joe', "Jonathan", "Ndambuki"];
