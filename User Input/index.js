import inquirer from 'inquirer';
const quesions = [{
        name: 'FirstNUmber',
        type: 'number',
        message: 'Enter First Number',
        validate: (answers) => {
            if (!answers) {
                console.log("Please Enter first Number");
            }
            return true;
        }
    },
    {
        name: 'SecondNUmber',
        type: 'number',
        message: 'Enter Second Number',
        validate: (answers) => {
            if (!answers) {
                console.log("Please Enter second number");
            }
            return true;
        }
    },
    {
        name: 'operations',
        type: 'list',
        message: 'Enter a operation you want to perform',
        choices: ["addition", "subtraction", "multiplication", "division", "exponent"],
        validate: (answers) => {
            if (!answers) {
                console.log("Please Enter operation");
            }
            return true;
        }
    }
];
var answers = inquirer.prompt(quesions);
answers.then((answers) => {
    switch (answers.operations) {
        case "multiplication":
            console.log(`${answers.FirstNUmber} * ${answers.SecondNUmber} = ${answers.FirstNUmber * answers.SecondNUmber}`);
            break;
        case "addition":
            console.log(`${answers.FirstNUmber} + ${answers.SecondNUmber} = ${answers.FirstNUmber + answers.SecondNUmber}`);
            break;
        case "division":
            console.log(`${answers.FirstNUmber} / ${answers.SecondNUmber} = ${answers.FirstNUmber / answers.SecondNUmber}`);
            break;
        case "subtraction":
            console.log(`${answers.FirstNUmber} - ${answers.SecondNUmber} = ${answers.FirstNUmber - answers.SecondNUmber}`);
            break;
    }
});
answers.catch((error) => {
    console.log("Error", error);
});
