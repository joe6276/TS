//"noImplicitAny"
function printData(data:string){
    console.log(data)
}

printData('This is My data')


// // "strictNullChecks
const btn = document.querySelector('#mybtn') ! ;

btn.addEventListener('click',()=>{
    console.log(" Clicked")
})