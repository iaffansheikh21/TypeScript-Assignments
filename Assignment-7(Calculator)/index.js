import inquirer from 'inquirer';
const questions = [
    {
        name: 'firstNumber',
        type: 'number',
        message: 'Enter First Number',
        validate: (input) => {
            if (!input) {
                return 'Please Enter the first number';
            }
            return true;
        },
    },
    {
        name: 'secondNumber',
        type: 'number',
        message: 'Enter Second Number',
        validate: (input) => {
            if (!input) {
                return 'Please Enter the second number';
            }
            return true;
        },
    },
    {
        name: 'operation',
        type: 'list',
        message: 'Enter an operation you want to perform',
        choices: ["addition", "subtraction", "multiplication", "division", "exponentiation", "modulus"],
        validate: (input) => {
            if (!input) {
                return 'Please Enter an operation';
            }
            return true;
        },
    },
];
async function main() {
    try {
        const answers = await inquirer.prompt(questions);
        switch (answers.operation) {
            case "multiplication":
                console.log(`${answers.firstNumber} * ${answers.secondNumber} = ${answers.firstNumber * answers.secondNumber}`);
                break;
            case "addition":
                console.log(`${answers.firstNumber} + ${answers.secondNumber} = ${answers.firstNumber + answers.secondNumber}`);
                break;
            case "division":
                console.log(`${answers.firstNumber} / ${answers.secondNumber} = ${answers.firstNumber / answers.secondNumber}`);
                break;
            case "subtraction":
                console.log(`${answers.firstNumber} - ${answers.secondNumber} = ${answers.firstNumber - answers.secondNumber}`);
                break;
            case "exponentiation":
                console.log(`${answers.firstNumber} ^ ${answers.secondNumber} = ${Math.pow(answers.firstNumber, answers.secondNumber)}`);
                break;
            case "modulus":
                console.log(`${answers.firstNumber} % ${answers.secondNumber} = ${answers.firstNumber % answers.secondNumber}`);
                break;
            default:
                console.log("Invalid operation");
        }
    }
    catch (error) {
        console.error("Error", error);
    }
}
main();
