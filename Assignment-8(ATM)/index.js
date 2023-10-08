import inquirer from "inquirer";
class ATM {
    accountNumber;
    pin;
    balance;
    transactions;
    constructor(accountNumber, pin) {
        this.accountNumber = accountNumber;
        this.pin = pin;
        this.balance = 50000; // initial balance
        this.transactions = [];
    }
    async login() {
        const answers = await inquirer.prompt([{
                type: 'input',
                name: 'accountNumber',
                message: 'Enter Your account Number: '
            },
            {
                type: 'password',
                name: 'pin',
                message: 'Enter Your PIN: ',
                mask: '*'
            }
        ]);
        if (answers.accountNumber === this.accountNumber && answers.pin === this.pin) {
            console.log("\nLogin Successfully\n");
            this.showOptions();
        }
        else if (answers.accountNumber != this.accountNumber) {
            console.log('login Failed.\nIncorrect Account Number\n');
        }
        else if (answers.pin != this.pin) {
            console.log("Login Failed.\nIncorrect PIN\n");
        }
    }
    async showOptions() {
        while (true) {
            const enteredChoice = await inquirer.prompt([{
                    type: 'list',
                    name: 'option',
                    message: 'Options:',
                    choices: [
                        'Check Account Balance',
                        'Withdraw Money',
                        'Check Previous Transactions',
                        'End Transaction'
                    ],
                },
            ]);
            switch (enteredChoice.option) {
                case "Check Account Balance": {
                    this.checkAccountBalance();
                    break;
                }
                case "Withdraw Money": {
                    await this.withdrawMoney();
                    break;
                }
                case "Check Previous Transactions": {
                    this.checkPreviousTransactions();
                    break;
                }
                case "End Transaction": {
                    console.log("\nTransaction Ended\n");
                    return;
                }
                default:
                    console.log("Invalid Choice.\nPlease try again\n");
            }
        }
    }
    checkAccountBalance() {
        console.log(`\nAccount Balance: $${this.balance}\n`);
    }
    async withdrawMoney() {
        const { amount } = await inquirer.prompt([{
                type: 'number',
                name: 'amount',
                message: 'Enter the Withdrawl amount: ',
                validate: (value) => {
                    if (isNaN(value)) {
                        console.log("Invalid Amount\n");
                    }
                    else if (value <= 0) {
                        console.log("Invalid Amount.\nAmount must be greater than 0\n");
                    }
                    return true;
                },
            },
        ]);
        this.balance = this.balance - amount;
        //console.log(`\nWithdrawn Amount: $${amount}\n`)
        //console.log(`New Balance: $${this.balance}\n`)
        const transaction = { amount, timestap: new Date() };
        this.transactions.push(transaction);
        console.log(`\nWithdrawn Amount: $${amount}\n`);
        //console.log(`New Balance: $${this.balance}\n`)
        if (this.balance < 0) {
            console.log("\nYour account has insufficient balance\n");
        }
        else if (this.balance > 0) {
            console.log(`New Balance: $${this.balance}\n`);
        }
    }
    checkPreviousTransactions() {
        if (this.transactions.length === 0) {
            console.log('No Previous Transactions.\n');
        }
        else {
            console.log("Previous Transactions\n");
            this.transactions.forEach((transaction, index) => {
                console.log(`${index + 1}. Amount: $${transaction.amount}\n Date: ${transaction.timestap}\n`);
            });
        }
    }
}
const atm = new ATM('03101048485', '4321');
atm.login();
