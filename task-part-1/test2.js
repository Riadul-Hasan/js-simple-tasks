function emailFunction(email){

    let idx = email.split('');
    // console.log(idx);

    let val = idx.slice(idx.indexOf('@') + 1, idx.length);
    let val1 = val.join('');
    if (!idx.includes("@")) {
        return false;
      }
   
    let newArr = [];
    for(let i = 0; i < idx.length; i++){
        if ( i === idx.indexOf('@') ){
            break;
        }

        else{
            newArr.push(idx[i]);
        }
    }
  
    return newArr.join('') + " sent you a email from " + val1;
}

let final = emailFunction('nadim.naem5@outlook.com');


if(final === false){
    console.log('Invalid Email');
}
else{
    console.log(final);
}
