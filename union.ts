function combine(input1:number|string , input2:number|string){
    let result;
    if(typeof input1==='number' && typeof input2=='number'){
        result= input1+ input2
    }else{
        result= input1.toString()+  input2.toString()
    
    }
    return result
}

const combinenumber= combine(23,45);
console.log(combinenumber);

const combinestring= combine('Jonathhan','Ndambuki');
console.log(combinestring);
