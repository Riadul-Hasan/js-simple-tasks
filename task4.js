const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function phonePriceAvg(phones){
    console.log(phones);
    let sum = 0;
    let count = 0;
    for(let item of phones){
        sum = sum + item.price;
        count++;
    }
    let avarage = sum / count;
    return avarage;
}

let priceAvarage = phonePriceAvg(phones);
console.log(priceAvarage);
