const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function totalCompanySalary(employees){
    console.log(employees);
    let totalSum = 0;
    let sum = 0;
    for(let item of employees){
       if(item.experience === 0){
            totalSum = totalSum + item.increment + item.starting;
       }
       else{
            let incrementTotal = 0;
            incrementTotal = item.experience * item.increment;
            sum = incrementTotal + item.starting;
            totalSum = sum + totalSum;
       }
    }
    return totalSum;
}

let totalSalary = totalCompanySalary(employees);
console.log('Ovarall salary for company is: ', totalSalary + ' bdt');