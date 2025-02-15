function bigger(array){
    let size1 = array[0].length;
    let size2 = array[1].length;
    let size3 = array[2].length;
    console.log(size1, size2, size3);
    
    let big = Math.max(size1,size2,size3);
    return big;
}

let str = 'Riadul Hasan Riad';
let res = str.split(' ');
let final = bigger(res);
console.log(final);


// task
let x = " hello are you going to study everyday And eat nice meal A A a a?"
let y = x.split('a').length
console.log("string a exist there", y , 'Times')