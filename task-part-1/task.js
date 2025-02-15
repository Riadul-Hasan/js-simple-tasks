function taxReturn(income, expense){
   if(income > expense && income > 0 && expense > 0){
        let remaining = income - expense;
        console.log(remaining);
        let tax = remaining * 0.2;
        return tax;
   }
   else{
     let str = 'Invalid Input';
     return str;
   }
}

let result = taxReturn(10000, 7000);
console.log('His total tax: ', result + ' BDT');