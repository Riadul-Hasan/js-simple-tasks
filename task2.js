const names = ['rahim', 'robin', 'rafi', 'roy', 'rashed'];

function smallestName(names){
    console.log(names);
    let minLength = names[0].length;
    let minName = names[0];
    for(let item of names){
        if(item.length <= minLength){
            minLength = item.length;
            minName = item;
        }
    }
    return minName + ' and its length: ' + minLength;
}

let final = smallestName(names);
console.log('Mini name is: ', final);