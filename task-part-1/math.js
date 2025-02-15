const min = Math.min(3,2,54,5);
console.log(min);

const max = Math.max(3,4,2);
console.log(max);

console.log(Math.round(3.4));

// when use floor ignore fractional value
console.log(Math.floor(4.645));

// random for randomly guess the numbers
console.log(Math.random());
console.log(Math.random()*10); //franctional random value between 0 to 10

//for ideal number
let randomNum = Math.round(Math.random() * 10);
console.log(randomNum);


console.log(Math.pow(2,3));

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
   console.log(i);
}, 100);
}