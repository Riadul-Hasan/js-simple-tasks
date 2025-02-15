const arr = [2,33,43,2,33,12,2];

function duplicateCheck(numbers){
    console.log(numbers);
    let uniqueArr = [];
    for(let item of numbers){
        if(uniqueArr.includes(item) === false){
            uniqueArr.push(item);
        }
    }
    return uniqueArr;
}

let finalArr = duplicateCheck(arr);
console.log('Final Array: ', finalArr);