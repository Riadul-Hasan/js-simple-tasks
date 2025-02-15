function returnDigit(name){
    console.log(name);
    if( typeof name !== 'string'){
        return 'Invalid Input';
    }
    let flag = false;
    for(let char of name){
        if(char >= '0' && char <= '9'){
            flag = true;
            break;
        } 
    }
    return flag;
}

let hasDigit = returnDigit(["Raj"]);
console.log(hasDigit);