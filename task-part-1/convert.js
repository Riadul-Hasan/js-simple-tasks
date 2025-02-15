function convertHeight(inch){
    let feet = inch / 12;
    let feetNumber = parseInt(feet);
    let remainingInch = inch % 12;
    const result = feetNumber + ' Feet ' + remainingInch + ' inch';
    return result;

}

let finalResult = convertHeight(76);
console.log(finalResult);