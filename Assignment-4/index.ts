// Assignment for the week:
//  - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
console.log(`----------Question 1----------`)
    function sumOfEvenNumbers(n:number) {
        let sum = 0;

        for(let i:number = 1 ; i <= n ; i++){
            const even:number = 2 * i;

            sum += even;
        }
        return sum;
    }

    var n:number = 21;
    sumOfEvenNumbers(n);
    console.log(`The sum of ${n} even numbers is : ${sumOfEvenNumbers(n)}`);

//  - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
console.log(`----------Question 2----------`)
    var array:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    for(let i:number = 0 ; i < array.length ; i++){
        if(array[i] % 2 === 0){
            console.log(`Even Number: ${array[i]}`)
        }
    }

//  - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
console.log(`----------Question 3----------`)

var Numbers:number[] = [1,2,3,4,5,6,7,8,9,10]

var oddNumbers:number[] = []

for(let i:number = 0 ; i < Numbers.length ; i++){
    if(Numbers[i] % 2 != 0 ){
        oddNumbers.push(Numbers[i])
    }
}

console.log(`Odd Numbers are ${oddNumbers}`)


//  - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
console.log(`----------Question 4----------`)
const pi:number = 3.14159;
function areaCalculator(radius:number){
    let area = pi * Math.pow(radius , 2);
    return area;
}

var radius:number = 6.18

console.log(`The area of circle is ${areaCalculator(radius)}`);


//  - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
console.log(`----------Question 5----------`)


function removingFailStudents(gradeList:number[]){
for(let i = 1 ; i < gradeList.length ; i++){
    if(gradeList[i] < 50){
        gradeList.splice(i,1);
        i--;
        }
    }
}

var grades:number[] = [56,89,22,65,90,12,33,54,49,47,99,24,57]
removingFailStudents(grades)
console.log(`Grades of Passed Students : ${grades}`)
//  - Write a program that uses a function to find the largest element in an array of numbers.
console.log(`----------Question 6----------`)

function largestElement(elementList:number[]){
    if(elementList.length === 0 ){
        console.log(`Array Is Empty`)
    }

    let largest:number = 0;
    for(let i:number = 0 ; i<elementList.length ; i++){
        if(elementList[i] > largest){
            largest = elementList[i]
        }
    }
}

var array:number[] = [243,123,34,35,35,34,34,76,57,68,35,8,23,67,235,67,235];
largestElement(array)
console.log(`The Largest Element in array is ${array}`)