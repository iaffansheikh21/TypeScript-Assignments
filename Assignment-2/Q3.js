"use strict";
var days = 365;
if (days < 0) {
    console.log("Please enter valid input ");
}
else if (days === 0) {
    console.log("0 Days");
}
else if (days > 0) {
    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;
    console.log(`${weeks} Weeks and ${remainingDays} days `);
}
