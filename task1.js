const heights2 = [13, 190, 120, 165, 120];
function findMinimum(numbers){
    console.log(numbers);
    let min = numbers[0];
    for(let item of numbers){
        if(item <= min ){
            min = item;
        }
    }
    return min;
}

let final = findMinimum(heights2);
console.log(final);