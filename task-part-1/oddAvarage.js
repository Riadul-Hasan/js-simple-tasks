function oddAvarage(numbers){
    console.log(numbers);
    let sum = 0;
    let count = 0;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % 2 === 1){
            count++;
            sum = sum + numbers[i];
        }
        else{
            continue;
        }
    }
    
    let avg = sum/count;
    return avg;

}

let result = oddAvarage([34,5,54,34,7]);
console.log(result);