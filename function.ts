
function add (a:number,b:number){
    return a+b
    }
    
    function printResult (a:number){
        console.log('The result is: '+a)
    }
    
    
    // console.log(add(23,45))
    
    
    // printResult(add(34,56))
    
    let assign:(a:number, b:number)=>number;
    assign= add
    // assign=printResult
    console.log(assign(35,85));
    
    
    
    function addHandle(a:number, b:number ,cb: (num:number)=>void){
        const result=a+b
        cb(result)
    }
    addHandle(43,56,(res)=>{
        console.log('The Result is ' +res);
        
    })