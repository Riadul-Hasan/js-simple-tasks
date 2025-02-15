const today = new Date('2054-12-23');
console.log(today.getMonth());
console.log(today.getDay());

const specificDay = new  Date(2060, 0, 26);
console.log(specificDay);

// set value or month
specificDay.setMonth(10);
console.log(specificDay.toLocaleString('en-GB'));

// unix epoc: calculate specific time between a time period
