function calculatePercentage(value:number , percentageValue:number){
    return (value * percentageValue)/100;
}

var total:number = 1100;
var percentValue:number = 30;

console.log(`${percentValue}% value of ${total} is ${calculatePercentage(total,percentValue)}`);