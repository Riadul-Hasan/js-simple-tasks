function isLeapYear(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 ===0){
        return true;
    }
    else{
        return false;
    }
}

let leapyear = isLeapYear(2052);
console.log(leapyear);