type strngnum=number|string;
type combiners='as-number'| 'as-string'
function combine(
    input1:strngnum , 
    input2:strngnum ,
    resultc:combiners
     
     ){
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

const combinenumbers= combine('23','899','as-number');
console.log(combinenumbers);

const combinestring= combine('Jonathhan','  Ndambuki','as-string');
console.log(combinestring);
