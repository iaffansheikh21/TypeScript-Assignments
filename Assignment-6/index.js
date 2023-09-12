"use strict";
// 1: Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
console.log("----------Question 1----------");
const personName1 = "Eric";
const message1 = `Hello ${personName1}, would you like to learn some Python today?`;
console.log(`${message1}`);
// 2: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log("----------Question 2----------");
const personName2 = "Muhammad Affan Sheikh";
const lowerCase = personName2.toLocaleLowerCase();
const upperCase = personName2.toLocaleUpperCase();
const titleCase = personName2.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
const titleC = toTitleCase(personName2);
console.log(`LowerCase : ${lowerCase} \nUpperCase : ${upperCase} \nTitleCase with function : ${titleC} \nTitleCase without function : ${titleCase}`);
// 3: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//  Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log("----------question 3----------");
const author1 = "Albert Einstein";
const quote1 = "A person who never made a mistake never tried anything new.";
console.log(`"${author1} once said, ${quote1}"`);
// 4: Famous Quote 2: Repeat Exercise 3, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
console.log("----------question 4----------");
const famousPerson = "Franklin D. Roosevelt";
const famousQuote = "The only thing we have to fear is fear itself.";
const message2 = `${famousPerson} once said, ${famousQuote}`;
console.log(message2);
// 5: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
console.log("----------Question 5----------");
const whiteSpacesName = "\t \t \n Muhammad \tAffan\t Sheikh \t \t \n";
const strippedName = whiteSpacesName.trim();
console.log(`Name with White-Spaces : ${whiteSpacesName} \nStripped Name : ${strippedName}`);
// 6: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
//  You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log("----------Question 6----------");
console.log("Addition ", 5 + 3);
console.log("Mutliplication", 4 * 2);
console.log('Subtraction ', 10 - 2);
console.log("Division ", 16 / 2);
// 7: Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
console.log("----------Question 7----------");
//This program describe my favourtie number
const favNumber = 21;
const message3 = `My Favourite Number is ${favNumber}`;
console.log(message3);
// 8: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
console.log("----------Question 8----------");
const friendNames = ['Umer', 'Ahmed', 'Ali', 'Abubakar', 'Haris'];
for (let i = 0; i < friendNames.length; i++) {
    //console.log('My Friend\'s Name is : ' , friendNames[i]);
    console.log(`Friend Name ${i + 1} : ${friendNames[i]}`);
}
// 9: Greetings: Start with the array you used in Exercise 8, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log("----------Question 9----------");
const friendNames2 = ['Umer', 'Ahmed', 'Ali', 'Abubakar', 'Haris'];
for (let i = 0; i < friendNames.length; i++) {
    const message4 = `Hello ${friendNames2[i]}, Have a nice day. Stay Blessed <3 `;
    console.log(message4);
}
//10: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
console.log("----------Question 10----------");
const myVehicle = ['Toyota', 'Audi', 'Ferrari', 'BMW', 'Honda'];
for (let i = 0; i < myVehicle.length; i++) {
    console.log(`I would like to own a ${myVehicle[i]} car`);
}
// 11: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
console.log("----------Question 11----------");
const guestList = ['Ali', 'Ahmad', 'Saleem', 'Usama', 'Usman'];
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hey ${guestList[i]}, You are cordially invited for dinner at my house ❣`);
}
//Ahmad can't make it
console.log("-------------------------------------------");
console.log(`Unfortunately ${guestList[1]}, can't make it to the dinner 😥`);
console.log("-------------------------------------------");
console.log("Updated Guest List");
guestList.splice(1, 1, 'Babar');
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hey ${guestList[i]}, You are cordially invited for dinner at my house ❤`);
}
console.log("We have more guests for dinner 🎉");
//Additional Guests to invite
const newGuests = ['Shadab', 'Shaheen', 'Rauf', 'Naseem'];
guestList.unshift(newGuests[0]);
guestList.splice(guestList.length / 2, 0, newGuests[1]);
guestList.push(newGuests[3]);
console.log("----------------------------------------\nFinal Guest's List");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hey ${guestList[i]} You're cordially invited for dinner at my house 💕`);
}
// Shrinking Guests
console.log(`Oops! The new table won't arrive in time, so we have to invite only two guests\n `);
while (guestList.length > 2) {
    const notInvited = guestList.pop();
    console.log(`Sorry ${notInvited} You're not invited for dinner 😥`);
}
//Inviting Remaining two guests
console.log("---------------------------------------------");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hey ${guestList[i]} You're still invited for dinner 🎉`);
}
//Empty Guest List kyu ky paisy end hogye hain🤣
console.log("--------------------------------------");
while (guestList.length > 0) {
    guestList.pop();
}
// guestList.length = 0;
console.log("Now the Guest List is Empty ", guestList);
console.log("----------Question 12----------");
// 12: Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
var places = ['Azad Kashmir', 'Neelum Valley', 'Skardu', 'Malam Jabba', 'Hunza Valley'];
console.log("\nArray Original Order: ", [...places]);
// •Print your array in alphabetical order without modifying the actual list.
console.log("\nAlphabetical Order without modifying original array: ", places.sort());
// • Show that your array is still in its original order by printing it.
console.log("\nArray Still in original Order: ", [...places]);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\nReverse alphabetical order without modifying original array:", [...places].sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log("\nArray is still in original order: ", [...places]);
// Reverse the order of your list. Print the array to show that its order has changed.
places.reverse();
console.log("\nArray in Reverse Order: ", [...places]);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
places.reverse();
console.log("Array after again Reverse: ", [...places]);
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Again Sorted array in alphabetical order : ", [...places].sort());
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Sort the array in reverse alphabetical order and print it
places.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(places);
// 13: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log("----------Question 13----------");
console.log(`You're invited ${guestList.length} people to dinner at your house `);
// 14: Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
console.log("----------Question 14----------");
var wishList = ['Mount Everest', 'Naga Parbat', 'Maldives', 'Islamabad', 'Chinese', "Cricket"];
console.log("\n", wishList);
// 15:They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
console.log("----------Question 15----------");
const bike = {
    company: "Honda",
    modelYear: "2023",
    KM_Driven: "30000 km",
    engine: "125CC"
};
const car = {
    company: "Toyota",
    modelYear: "2021",
    carName: "Grande",
    price: "Pkr/9000000"
};
console.log("Bike", bike, "\nCar", car);
// 16: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
console.log("----------Question 16----------");
const frnds = ["Ahmed", "Ali", "Umer", "Babar"];
console.log(frnds[5]); //It gives error
console.log(frnds[3]);
/* 17: Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */
console.log("----------Question 17----------");
let num1 = 5;
let num2 = 10;
let text1 = 'Hello';
let text2 = 'World';
// 1: Is num1 equal to 5? 
//I predict True.
console.log(num1 == 5);
// 2: Is num2 not equal to 10? 
//I predict False.
console.log(num2 != 10);
// 3: Is num1 greater than num2? 
//I predict False.
console.log(num1 > num2);
// 4: Is num2 less than or equal to 10? 
//I predict True.
console.log(num2 <= 10);
// 5: Is text1 equal to 'Hello'? 
//I predict True.
console.log(text1 == 'Hello');
// 6: Is text2 not equal to 'World'? 
//I predict False.
console.log(text2 != 'World');
// 7: Is text1 less than text2 (lexicographically)? 
//I predict True.
console.log(text1 < text2);
// 8: Is num1 equal to '5' (string)? 
// predict False due to type mismatch.
//console.log(num1 == '5');
// 9: Is num1 strictly equal to 5? I predict True.
console.log(num1 === 5);
// 10: Is num1 less than or equal to num2 AND text1 is equal to 'Hello'? 
//I predict False.
console.log(num1 <= num2 && text1 == 'Hello');
/* 18: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array */
console.log("----------Question 18----------");
let name1 = 'John';
let name2 = 'Mary';
console.log("Is name1 equal to 'John'? I predict True.");
console.log(name1 == 'John');
console.log("Is name2 not equal to 'John'? I predict True.");
console.log(name2 != 'John');
let text3 = 'JavaScript';
let text4 = 'javascript';
console.log("Is text3 in lowercase equal to 'javascript' in lowercase? I predict True.");
console.log(text3.toLowerCase() == text4.toLowerCase());
let num3 = 10;
let num4 = 5;
console.log("Is num3 greater than num4? I predict True.");
console.log(num3 > num4);
console.log("Is num4 less than or equal to num3? I predict True.");
console.log(num4 <= num3);
console.log("Is num3 not equal to '10'? I predict True.");
console.log(num3 != 10);
let isSunny = true;
let isWarm = true;
console.log("Is it sunny and warm? I predict True.");
console.log(isSunny && isWarm);
let isRaining = false;
let isCold = true;
console.log("Is it raining or cold? I predict True.");
console.log(isRaining || isCold);
let fruits = ['apple', 'banana', 'cherry', 'date'];
console.log("Is 'banana' in the array? I predict True.");
console.log(fruits.includes('banana'));
console.log("Is 'grape' not in the array? I predict True.");
console.log(!fruits.includes('grape'));
/* 19: Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)*/
console.log('----------Question 19----------');
const alienColor1 = 'Green';
if (alienColor1 == 'green' || alienColor1 == 'Green') {
    console.log(`The Player earned 5 points`);
}
if (alienColor1 != 'green') {
    console.log("");
}
/* 20: Alien Colors #2: Choose a color for an alien as you did in Exercise 19, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block. */
console.log("----------Question 20----------");
const alienColor2 = 'red';
if (alienColor2 == 'red') {
    console.log(`The Player earned 10 points`);
}
else {
    console.log(`The Player earned 5 points`);
}
/* 21: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
console.log(`----------Question 21----------`);
let alienColor = 'Green' || 'green';
if (alienColor === 'green' || alienColor === 'Green') {
    console.log(`The Player earned 5 points`);
}
else if (alienColor === 'red' || alienColor === 'Red') {
    console.log(`The Player earned 15 points`);
}
else if (alienColor === 'yellow' || alienColor === 'Yellow') {
    console.log(`The Player earned 10 points`);
}
else {
    console.log('Invalid Color');
}
let AlienColor2 = 'Yellow' || 'yellow';
if (AlienColor2 === 'green' || AlienColor2 === 'Green') {
    console.log(`The Player earned 5 points`);
}
else if (AlienColor2 === 'red' || AlienColor2 === 'Red') {
    console.log(`The Player earned 15 points`);
}
else if (AlienColor2 === 'yellow' || AlienColor2 === 'Yellow') {
    console.log(`The Player earned 10 points`);
}
else {
    console.log('Invalid Color');
}
let alienColor3 = 'Red' || 'red';
if (alienColor3 === 'green' || alienColor3 === 'Green') {
    console.log(`The Player earned 5 points`);
}
else if (alienColor3 === 'red' || alienColor3 === 'Red') {
    console.log(`The Player earned 15 points`);
}
else if (alienColor3 === 'yellow' || alienColor3 === 'Yellow') {
    console.log(`The Player earned 10 points`);
}
else {
    console.log('Invalid Color');
}
/* 22: Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.
• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder.*/
console.log("----------Question 22----------");
const age = 46;
if (age < 0) {
    console.log("Person does not exist.");
}
else if (age < 2) {
    console.log("The person is baby.");
}
else if (age >= 2 && age < 4) {
    console.log('The person is toddler.');
}
else if (age >= 4 && age < 13) {
    console.log('The person is kid.');
}
else if (age >= 13 && age < 20) {
    console.log('The person is teenager');
}
else if (age >= 20 && age < 65) {
    console.log('The person is adult.');
}
else {
    console.log("The person is elder");
}
/* 23: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
console.log('----------Question 23----------');
const favFruits = ['Mango', 'Apple', 'Peach'];
if (favFruits.includes('Mango')) {
    console.log("I likes Mangoes too much");
}
if (favFruits.includes('Oranges')) {
    console.log('I Like Oranges');
}
else {
    console.log("I don't like oranges much");
}
if (favFruits.includes('Peach')) {
    console.log('I like Peaches');
}
if (favFruits.includes('Guava')) {
    console.log('I Like Guavas');
}
else {
    console.log('I like guava but not too');
}
if (favFruits.includes('Apple')) {
    console.log('I Like Apples');
}
/*24: Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
console.log("----------Question 24----------");
const userNames = ['admin', 'Affan', 'Babar', 'Naseem', 'Shaheen', 'Rauf'];
for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === 'admin') {
        console.log(`Hello ${userNames[i]}, would you like to see status report`);
    }
    else {
        console.log(`Hello ${userNames[i]}, thank you for logging again`);
    }
}
/*25: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
console.log("----------Question 25----------");
const usernames = ['admin', 'Affan', 'Babar', 'Naseem', 'Shaheen', 'Rauf'];
if (usernames.length > 0) {
    // Loop through the array and print greetings
    for (let i = 0; i < usernames.length; i++) {
        if (usernames[i] === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
        }
    }
}
else {
    console.log("We need to find some users!");
}
//removes all usernames
usernames.length = 0;
// Check if the list of users is empty and print the appropriate message
if (usernames.length === 0) {
    console.log("\nWe need to find some users!");
}
/*26: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
console.log('----------Question 26--------');
const currentUsers = ['John', 'Alice', 'Bob', 'Jane', 'Eric'];
const newUsers = ['John', 'Sara', 'David', 'ALICE', 'Grace'];
for (let i = 0; i < newUsers.length; i++) {
    const newUsernameLower = newUsers[i].toLowerCase();
    if (currentUsers.map(user => user.toLowerCase()).includes(newUsernameLower)) {
        console.log(`Username '${newUsers[i]}' is not available. Please enter a new username.`);
    }
    else {
        console.log(`Username '${newUsers[i]}' is available.`);
    }
}
/*27: Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.
• Loop through the array.
• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.*/
console.log("----------Question 27----------");
const ordNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const ordNumber of ordNumbers) {
    let ordinals = "";
    if (ordNumber === 1) {
        ordinals = "1st";
    }
    else if (ordNumber === 2) {
        ordinals = "2nd";
    }
    else if (ordNumber === 3) {
        ordinals = "3rd";
    }
    else {
        ordinals = `${ordNumber}th`;
    }
    console.log(ordinals);
}
/* 28: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/
console.log("----------Quesion 28----------");
const favPizzas = ["Fajita Pizza", "Chicken Tikka Pizza", "Chicken Malai Boti Pizza"];
for (let i = 0; i < favPizzas.length; i++) {
    console.log(`I Like ${favPizzas[i]}`);
}
console.log("How much you like pizza?");
console.log("I really love pizza!");
/*29: Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!*/
console.log("----------Question 29----------");
const animals = ["dog", "cat", "fish"];
for (const animal of animals) {
    console.log(`A ${animal} would make a great pet!`);
}
console.log("Any of these animals would make a great pet!");
/*30: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.*/
console.log("----------Question 30----------");
function make_shirt(size, message) {
    console.log(`I made a ${size} shirt with message "${message}" printing on it`);
}
make_shirt('Large', 'I Love PRogramming');
/*31: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
console.log("----------Question 31----------");
function make_shirt2(size = "large", message = "I love Programming") {
    console.log(`I made a ${size} shirt with the message '${message}' printed on it.`);
}
make_shirt2();
make_shirt2("medium");
make_shirt2("small", "I love Python!");
/*32: Cities: Write a function called describe_city() that accepts the name of a city and its country.
The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the default country.*/
console.log("----------Question 32----------");
function describeCity(city = "Faisalabad", country = "Pakistan") {
    console.log(`${city}, is the city located in ${country}`);
}
describeCity();
describeCity("COlombo", "SriLanka");
describeCity("Makkah", "Saudia Arabia");
/*33:City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned. */
console.log("----------Question 33----------");
function cityNames(city, country) {
    console.log(`"${city}, ${country}"`);
}
cityNames("Faisalabad", "Pakistan");
cityNames("Lahore", "Pakistan");
cityNames("Islamabad", "Pakistan");
/*34: Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
Use the function to make three dictionaries representing different albums.
Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
If the calling line includes a value for the number of tracks, add that value to the album’s Object.
Make at least one new function call that includes the number of tracks on an album. */
console.log("----------Question 34----------");
function makeAlbum(artistName, albumTitle, noOfTracks) {
    const album = {
        artistName,
        albumTitle
    };
    if (noOfTracks !== undefined) {
        album.noOfTracks = noOfTracks;
    }
    return album;
}
;
console.log(makeAlbum("Atif Aslam", "Aadat"));
console.log(makeAlbum("Arijit Singh", "Tere Hawale", 1));
console.log(makeAlbum("Quratulain Baloch", "Saiyaan", 2));
/*35: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */
console.log("----------Question 35----------");
const magicians = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
function showMagician(magician) {
    for (const mag of magician) {
        console.log(mag);
    }
}
showMagician(magicians);
/*36: Great Magicians: Start with a copy of your program from Exercise 35.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.*/
console.log("----------Question 36----------");
const magicians2 = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
function makeGreat(magician) {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = `The Great ${magician[i]}`;
    }
}
function showMagician2(magician) {
    for (const great of magician) {
        console.log(`${great}, the great magician`);
    }
}
console.log("Modified");
makeGreat(magicians2);
showMagician(magicians2);
/*37:  Unchanged Magicians: Start with your work from Exercise 36.
Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
console.log("----------Question 37----------");
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        greatMagicians.push(`The Great ${magician}`);
    }
    return greatMagicians;
}
const magicianNames = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
const greatMagiciansArray = make_great(magicianNames);
console.log("Original Magicians:");
show_magicians(magicianNames);
console.log("\nModified Magicians:");
show_magicians(greatMagiciansArray);
/*38:Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
Call the function three times, using a different number of arguments each time. */
console.log("----------Question 38----------");
function sandwich(items) {
    if (items.length === 0) {
        console.log("No items selected. It's empty sandwich");
    }
    else {
        for (const item of items) {
            console.log(`${item}`);
        }
    }
}
sandwich([]);
console.log("====================================");
sandwich(['Bread', 'Peanut Butter', 'Jelly']);
console.log("====================================");
sandwich(['Bread', 'Turkey', 'Lettuce', 'Tomato', 'Mayonnaise']);
/*39: Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly.*/
console.log("----------Question 39----------");
function carInformation(manufacturer, modelName, color, features) {
    const car = {
        manufacturer,
        modelName
    };
    if (color) {
        car.color = color;
    }
    if (features) {
        car.features = features;
    }
    return car;
}
console.log("Car Information\n", carInformation("Toyota", "Camry", "Metallic Grey", ['Sun Roof', 'Power Steering']));
