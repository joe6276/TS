
 

function combine(input1:number|string , input2:number|string , resultc:'as-number'| 'as-string'){
    let result;
    if(typeof input1==='number' && typeof input2=='number'||resultc==='as-number'){
        result= +input1+ +input2
    }else{
        result= input1.toString()+  input2.toString()
    
    }
    return result
}

const combinenumber= combine(23,45,'as-number');
console.log(combinenumber);

const combinestring= combine('Jonathhan','Ndambi','as-string');
console.log(combinestring);
