// // // Import necessary modules
// // import * as readline from 'readline';
// // import inquirer from inquirer;
// import * as readline from 'readline';
// import inquirer from 'inquirer';
// import chalk from 'chalk';
// const userData = [
//   { id: 'user1', pin: '1234', name: 'User One', balance: 1000 },
//   { id: 'user2', pin: '5678', name: 'User Two', balance: 2000 },
// ];
// let currentUser: any = null;
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// const successStyle = chalk.green;
// const errorStyle = chalk.red.bold;
// const infoStyle = chalk.blue;
// async function displayMenu() {
//   const menuOptions = [
//     'Balance Inquiry',
//     'Deposit',
//     'Withdrawal',
//     'Account Information',
//     'Exit',
//   ];
//   const choiceAnswer = await inquirer.prompt([
//     {
//       type: 'list',
//       name: 'choice',
//       message: 'Main Menu:',
//       choices: menuOptions,
//       suggestOnly: true,
//     },
//   ]);
//   const { choice } = choiceAnswer;
//   handleMenuChoice(choice);
// }
// async function authenticateUser() {
//   const answers = await inquirer.prompt([
//     { type: 'input', name: 'userId', message: 'Enter User ID:' },
//     { type: 'password', name: 'pin', message: 'Enter PIN:', mask: true },
//   ]);
//   const { userId, pin } = answers;
//   currentUser = userData.find((user) => user.id === userId && user.pin === pin);
//   if (currentUser) {
//     console.log(successStyle(`Welcome, ${currentUser.name}!`));
//     displayMenu();
//   } else {
//     console.log(errorStyle('Invalid credentials. Please try again.'));
//     authenticateUser();
//   }
// }
// async function handleMenuChoice(choice: string) {
//   if (choice === 'Deposit') {
//     const depositAmountAnswer = await inquirer.prompt([
//       {
//         type: 'input',
//         name: 'amount',
//         message: 'Enter the amount to deposit:',
//         validate: (value) => {
//           const depositAmount = parseFloat(value);
//           return !isNaN(depositAmount) && depositAmount > 0;
//         },
//       },
//     ]);
//     const depositAmount = parseFloat(depositAmountAnswer.amount);
//     const previousBalanceD = currentUser.balance;
//     currentUser.balance += depositAmount;
//     console.log(successStyle(`Previous balance: $${previousBalanceD}`));
//     console.log(successStyle(`$${depositAmount} deposited successfully.`));
//     console.log(successStyle(`Your new balance is $${currentUser.balance}`));
//     displayMenu();
//   } else if (choice === 'Withdrawal') {
//     const withdrawalAmountAnswer = await inquirer.prompt([
//       {
//         type: 'input',
//         name: 'amount',
//         message: 'Enter the amount to withdraw:',
//         validate: (value) => {
//           const withdrawalAmount = parseFloat(value);
//           return !isNaN(withdrawalAmount) && withdrawalAmount > 0 && withdrawalAmount <= currentUser.balance;
//         },
//       },
//     ]);
//     const withdrawalAmount = parseFloat(withdrawalAmountAnswer.amount);
//     const previousBalanceW = currentUser.balance;
//     currentUser.balance -= withdrawalAmount;
//     console.log(successStyle(`Previous balance: $${previousBalanceW}`));
//     console.log(successStyle(`$${withdrawalAmount} withdrawn successfully.`));
//     console.log(successStyle(`Your new balance is $${currentUser.balance}`));
//     displayMenu();
//   } else if (choice === 'Balance Inquiry') {
//     console.log(infoStyle(`Your balance is $${currentUser.balance}`));
//     displayMenu();
//   } else if (choice === 'Account Information') {
//     console.log(infoStyle(`Account Information for ${currentUser.name}`));
//     console.log(infoStyle(`User ID: ${currentUser.id}`));
//     console.log(infoStyle(`Account Balance: $${currentUser.balance}`));
//     displayMenu();
//   } else if (choice === 'Exit') {
//     console.log(infoStyle('Thank you for using the ATM. Goodbye!'));
//     rl.close();
//   } else {
//     console.log(errorStyle('Invalid choice. Please try again.'));
//     displayMenu();
//   }
// }
// console.log('Welcome to the ATM!');
// authenticateUser();
// //2
// import inquirer from 'inquirer';
// import chalk from 'chalk';
// const userData = [
//   { id: 'user1', pin: '1234', name: 'User One', balance: 1000 },
//   { id: 'user2', pin: '5678', name: 'User Two', balance: 2000 },
// ];
// let currentUser: any = null;
// const successStyle = chalk.green.bold;
// const errorStyle = chalk.red.bold;
// const infoStyle = chalk.blue;
// async function displayMenu() {
//   const menuOptions = [
//     'Balance Inquiry',
//     'Deposit',
//     'Withdrawal',
//     'Account Information',
//     'Exit',
//   ];
//   const choiceAnswer = await inquirer.prompt([
//     {
//       type: 'list',
//       name: 'choice',
//       message: 'Main Menu:',
//       choices: menuOptions,
//     },
//   ]);
//   const { choice } = choiceAnswer;
//   handleMenuChoice(choice);
// }
// async function authenticateUser() {
//   const answers = await inquirer.prompt([
//     { type: 'input', name: 'userId', message: 'Enter User ID:' },
//     { type: 'password', name: 'pin', message: 'Enter PIN:', mask: '*' },
//   ]);
//   const { userId, pin } = answers;
//   currentUser = userData.find((user) => user.id === userId && user.pin === pin);
//   if (currentUser) {
//     console.log(successStyle(`Welcome, ${currentUser.name}!`));
//     displayMenu();
//   } else {
//     console.log(errorStyle('Invalid credentials. Please try again.'));
//     authenticateUser();
//   }
// }
// async function handleMenuChoice(choice: string) {
//   if (choice === 'Deposit') {
//     const depositAmountAnswer = await inquirer.prompt([
//       {
//         type: 'input',
//         name: 'amount',
//         message: 'Enter the amount to deposit:',
//         validate: (value) => {
//           const depositAmount = parseFloat(value);
//           return !isNaN(depositAmount) && depositAmount > 0;
//         },
//       },
//     ]);
//     const depositAmount = parseFloat(depositAmountAnswer.amount);
//     const previousBalanceD = currentUser.balance;
//     currentUser.balance += depositAmount;
//     console.log(successStyle('Deposit successful!'));
//     console.log(successStyle(`Previous balance: $${previousBalanceD.toFixed(2)}`));
//     console.log(successStyle(`$${depositAmount.toFixed(2)} deposited successfully.`));
//     console.log(successStyle(`Your new balance is $${currentUser.balance.toFixed(2)}`));
//     displayMenu();
//   } else if (choice === 'Withdrawal') {
//     const withdrawalAmountAnswer = await inquirer.prompt([
//       {
//         type: 'input',
//         name: 'amount',
//         message: 'Enter the amount to withdraw:',
//         validate: (value) => {
//           const withdrawalAmount = parseFloat(value);
//           return !isNaN(withdrawalAmount) && withdrawalAmount > 0 && withdrawalAmount <= currentUser.balance;
//         },
//       },
//     ]);
//     const withdrawalAmount = parseFloat(withdrawalAmountAnswer.amount);
//     const previousBalanceW = currentUser.balance;
//     currentUser.balance -= withdrawalAmount;
//     console.log(successStyle('Withdrawal successful!'));
//     console.log(successStyle(`Previous balance: $${previousBalanceW.toFixed(2)}`));
//     console.log(successStyle(`$${withdrawalAmount.toFixed(2)} withdrawn successfully.`));
//     console.log(successStyle(`Your new balance is $${currentUser.balance.toFixed(2)}`));
//     displayMenu();
//   } else if (choice === 'Balance Inquiry') {
//     console.log(infoStyle(`Your balance is $${currentUser.balance.toFixed(2)}`));
//     displayMenu();
//   } else if (choice === 'Account Information') {
//     console.log(infoStyle(`Account Information for ${currentUser.name}`));
//     console.log(infoStyle(`User ID: ${currentUser.id}`));
//     console.log(infoStyle(`Account Balance: $${currentUser.balance.toFixed(2)}`));
//     displayMenu();
//   } else if (choice === 'Exit') {
//     console.log(infoStyle('Thank you for using the ATM. Goodbye!'));
//     process.exit(0);
//   } else {
//     console.log(errorStyle('Invalid choice. Please try again.'));
//     displayMenu();
//   }
// }
// console.log(chalk.yellow.bold('Welcome to the ATM!'));
// authenticateUser();
import inquirer from 'inquirer';
import chalk from 'chalk';
const userData = [
    { id: 'user1', pin: '1234', name: 'User One', balance: 1000 },
    { id: 'user2', pin: '5678', name: 'User Two', balance: 2000 },
];
let currentUser = null;
const successStyle = chalk.green.bold;
const errorStyle = chalk.red.bold;
const infoStyle = chalk.blue;
async function displayMenu() {
    const menuOptions = [
        'Balance Inquiry',
        'Deposit',
        'Withdrawal',
        'Account Information',
        'Exit',
    ];
    const choiceAnswer = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Main Menu:',
            choices: menuOptions,
        },
    ]);
    const { choice } = choiceAnswer;
    handleMenuChoice(choice);
}
async function authenticateUser() {
    const answers = await inquirer.prompt([
        { type: 'input', name: 'userId', message: 'Enter User ID:' },
        { type: 'password', name: 'pin', message: 'Enter PIN:', mask: '*' },
    ]);
    const { userId, pin } = answers;
    currentUser = userData.find((user) => user.id === userId && user.pin === pin);
    if (currentUser) {
        console.log(successStyle(`Welcome, ${currentUser.name}!`));
        const continueAnswer = await inquirer.prompt([
            {
                type: 'list',
                name: 'continue',
                message: 'Do you want to continue or quit?',
                choices: ['Continue', 'Quit'],
            },
        ]);
        if (continueAnswer.continue === 'Continue') {
            displayMenu();
        }
        else {
            console.log(infoStyle('Thank you for using the ATM. Goodbye!'));
            process.exit(0);
        }
    }
    else {
        console.log(errorStyle('Invalid credentials. Please try again.'));
        authenticateUser();
    }
}
async function handleMenuChoice(choice) {
    if (choice === 'Deposit') {
        const depositAmountAnswer = await inquirer.prompt([
            {
                type: 'input',
                name: 'amount',
                message: 'Enter the amount to deposit:',
                validate: (value) => {
                    const depositAmount = parseFloat(value);
                    return !isNaN(depositAmount) && depositAmount > 0;
                },
            },
        ]);
        const depositAmount = parseFloat(depositAmountAnswer.amount);
        const previousBalanceD = currentUser.balance;
        currentUser.balance += depositAmount;
        console.log(successStyle('Deposit successful!'));
        console.log(successStyle(`Previous balance: $${previousBalanceD.toFixed(2)}`));
        console.log(successStyle(`$${depositAmount.toFixed(2)} deposited successfully.`));
        console.log(successStyle(`Your new balance is $${currentUser.balance.toFixed(2)}`));
        displayMenu();
    }
    else if (choice === 'Withdrawal') {
        const withdrawalAmountAnswer = await inquirer.prompt([
            {
                type: 'input',
                name: 'amount',
                message: 'Enter the amount to withdraw:',
                validate: (value) => {
                    const withdrawalAmount = parseFloat(value);
                    return !isNaN(withdrawalAmount) && withdrawalAmount > 0 && withdrawalAmount <= currentUser.balance;
                },
            },
        ]);
        const withdrawalAmount = parseFloat(withdrawalAmountAnswer.amount);
        const previousBalanceW = currentUser.balance;
        currentUser.balance -= withdrawalAmount;
        console.log(successStyle('Withdrawal successful!'));
        console.log(successStyle(`Previous balance: $${previousBalanceW.toFixed(2)}`));
        console.log(successStyle(`$${withdrawalAmount.toFixed(2)} withdrawn successfully.`));
        console.log(successStyle(`Your new balance is $${currentUser.balance.toFixed(2)}`));
        displayMenu();
    }
    else if (choice === 'Balance Inquiry') {
        console.log(infoStyle(`Your balance is $${currentUser.balance.toFixed(2)}`));
        displayMenu();
    }
    else if (choice === 'Account Information') {
        console.log(infoStyle(`Account Information for ${currentUser.name}`));
        console.log(infoStyle(`User ID: ${currentUser.id}`));
        console.log(infoStyle(`Account Balance: $${currentUser.balance.toFixed(2)}`));
        displayMenu();
    }
    else if (choice === 'Exit') {
        console.log(infoStyle('Thank you for using the ATM. Goodbye!'));
        process.exit(0);
    }
    else {
        console.log(errorStyle('Invalid choice. Please try again.'));
        displayMenu();
    }
}
console.log(chalk.yellow.bold('Welcome to the UQ ATM!'));
authenticateUser();
