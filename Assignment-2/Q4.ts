var price:number = 200;

if(price > 100){
    var discountedPrice:number = price - (price * 10)/100;
    console.log(`The Discounted price is ${discountedPrice}`);
}
else{
    var discountedPrice:number = price - (price * 5)/100;
    console.log(`The Discounted Price is ${discountedPrice}`);
}
var price2:number = 99;

if(price2 > 100){
    var discountedPrice:number = price2 - (price2 * 10)/100;
    console.log(`The Discounted price is ${discountedPrice}`);
}
else{
    var discountedPrice:number = price2 - (price2 * 5)/100;
    console.log(`The Discounted Price is ${discountedPrice}`);
}