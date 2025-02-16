const times = [6];

function remainingTime(arr, serial){
    if(!Array.isArray(arr) || typeof serial !== 'number' ){
        return 'Invalid input';
    }

    console.log(arr, serial);
    let totalTime = 0;
    let count = 0;
    for(let item of arr){
        count++;
        totalTime = totalTime + item;
    }
    let avgTime = Math.round(totalTime / count);
    let remainingPerson = serial - 1 - arr.length;
    let remainingTime = 0;
    if(remainingPerson > 0){
        remainingTime = remainingPerson * avgTime;
    }
    return remainingTime;
}

let final = remainingTime(times, 4);
console.log(final);