"use strict";
// - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
console.log(`----------Question 1----------`);
function insertValueAtIndex(arr, index, value) {
    arr.splice(index, 0, value);
    return arr;
}
const originalArray = [1, 2, 3, 4, 5];
const indexToInsert = 2;
const valueToInsert = 99;
const modifiedArray = insertValueAtIndex(originalArray, indexToInsert, valueToInsert);
console.log(modifiedArray);
// - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
console.log(`----------Question 2----------`);
class ShoppingCart {
    constructor() {
        this.cart = [];
    }
    // Function to add items to the cart
    addItem(name, price, quantity) {
        const itemIndex = this.findIndexByName(name);
        if (itemIndex !== -1) {
            this.cart[itemIndex].quantity += quantity;
        }
        else {
            const newItem = { name, price, quantity };
            this.cart.push(newItem);
        }
        this.printCart();
    }
    // Function to remove items from the cart
    removeItem(name) {
        const itemIndex = this.findIndexByName(name);
        if (itemIndex !== -1) {
            this.cart.splice(itemIndex, 1);
        }
        this.printCart();
    }
    // Function to update the quantity of an item in the cart
    updateQuantity(name, quantity) {
        const itemIndex = this.findIndexByName(name);
        if (itemIndex !== -1) {
            this.cart[itemIndex].quantity = quantity;
        }
        this.printCart();
    }
    // Function to find an item's index in the cart by name
    findIndexByName(name) {
        return this.cart.findIndex((item) => item.name === name);
    }
    // Function to print the cart's contents
    printCart() {
        console.log("Cart Contents:");
        this.cart.forEach((item) => {
            console.log(`${item.name} - Quantity: ${item.quantity} - Price: $${item.price}`);
        });
        console.log("------------------");
    }
}
// Example usage:
const cart = new ShoppingCart();
cart.addItem("Apple", 1.5, 3);
cart.addItem("Banana", 0.5, 5);
cart.addItem("Apple", 1.5, 2);
cart.removeItem("Banana");
cart.updateQuantity("Apple", 4);
// - Write a program that uses a while loop to print the first 25 integers.
console.log(`----------Question 3----------`);
var count = 1;
while (count <= 25) {
    console.log("Value is ", count);
    count++;
}
// - Write a program that uses a while loop to print the first 10 even numbers.
console.log(`----------Question 4----------`);
var num = 1;
var eventCount = 0;
while (eventCount < 10) {
    if (num % 2 == 0) {
        console.log(num);
        eventCount++;
    }
    num++;
}
// - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
console.log(`----------Question 5----------`);
function factorial(n) {
    if (n < 0) {
        console.log("Invalid Input");
    }
    let a = 1;
    let b = 1;
    while (b <= n) {
        a = a * b;
        b++;
    }
    return a;
}
var num1 = 10;
var result = factorial(num1);
console.log(`Factorial of ${num1} is ${result}`);
// - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
console.log(`----------Question 6----------`);
function removeNegativeNumbers(numbers) {
    return numbers.filter(number => number >= 0);
}
const numbersArray = [3, -5, 10, -2, 8, -7, 0, 4];
const positiveNumbersArray = removeNegativeNumbers(numbersArray);
console.log("Original array:", numbersArray);
console.log("Array without negative numbers:", positiveNumbersArray);
// - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
console.log(`----------Question 7----------`);
function sum(array) {
    let sum = 0;
    let a = 0;
    while (array.length > a) {
        sum += array[a];
        a++;
    }
    return sum;
}
var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = sum(numArray);
console.log("The Sum of integers is " + result);
// - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
console.log(`----------Question 8----------`);
function celsiusToFahrenheit(celsiusTemperatures) {
    const fahrenheitTemperatures = [];
    let i = 0;
    while (i < celsiusTemperatures.length) {
        const celsius = celsiusTemperatures[i];
        const fahrenheit = (celsius * 9 / 5) + 32;
        fahrenheitTemperatures.push(fahrenheit);
        i++;
    }
    return fahrenheitTemperatures;
}
// Example usage:
const celsiusTemperatures = [0, 25, 100, -10];
const fahrenheitTemperatures = celsiusToFahrenheit(celsiusTemperatures);
console.log("Celsius Temperatures: ", celsiusTemperatures);
console.log("Fahrenheit Temperatures: ", fahrenheitTemperatures);
