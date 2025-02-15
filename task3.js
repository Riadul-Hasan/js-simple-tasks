let electronics = {
    laptop : 35000,
    tablet : 15000,
    mobile : 20000,
}

function calculateElectronicsBudget(laptop, tablet, mobile){
    let laptopPrice = laptop * electronics.laptop;
    let tabletPrice = tablet * electronics.tablet;
    let mobilePrice = mobile * electronics.mobile;
    let totalPrice = laptopPrice + tabletPrice + mobilePrice;
    return totalPrice;
}

let final = calculateElectronicsBudget(2,4,3);
console.log('Total Price: ', final);
