"use strict";
function calculatePercentage(value, percentageValue) {
    return (value * percentageValue) / 100;
}
var total = 1100;
var percentValue = 30;
console.log(`${percentValue}% value of ${total} is ${calculatePercentage(total, percentValue)}`);
