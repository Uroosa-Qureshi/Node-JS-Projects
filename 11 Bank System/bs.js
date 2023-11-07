import enquirer from 'enquirer';
const users = [];
async function createAccount() {
    const user = await enquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name:',
        },
        {
            type: 'number',
            name: 'balance',
            message: 'Enter your initial balance:',
        },
    ]);
    const newUser = {
        id: users.length.toString(),
        name: user.name,
        balance: user.balance,
    };
    users.push(newUser);
    console.log(`Account created for ${newUser.name} with ID ${newUser.id}`);
}
async function deposit() {
    const userId = await enquirer.prompt({
        type: 'input',
        name: 'id',
        message: 'Enter your user ID:',
    });
    const user = users.find((u) => u.id === userId.id);
    if (!user) {
        console.log('User not found. Please create an account first.');
        return;
    }
    const depositAmount = await enquirer.prompt({
        type: 'number',
        name: 'amount',
        message: 'Enter the amount to deposit:',
    });
    user.balance += depositAmount.amount;
    console.log(`Deposited $${depositAmount.amount}. New balance: $${user.balance}`);
}
async function withdraw() {
    const userId = await enquirer.prompt({
        type: 'input',
        name: 'id',
        message: 'Enter your user ID:',
    });
    const user = users.find((u) => u.id === userId.id);
    if (!user) {
        console.log('User not found. Please create an account first.');
        return;
    }
    const withdrawAmount = await enquirer.prompt({
        type: 'number',
        name: 'amount',
        message: 'Enter the amount to withdraw:',
    });
    if (withdrawAmount.amount > user.balance) {
        console.log('Insufficient balance. Please try a smaller amount.');
    }
    else {
        user.balance -= withdrawAmount.amount;
        console.log(`Withdrawn $${withdrawAmount.amount}. New balance: $${user.balance}`);
    }
}
async function checkBalance() {
    const userId = await enquirer.prompt({
        type: 'input',
        name: 'id',
        message: 'Enter your user ID:',
    });
    const user = users.find((u) => u.id === userId.id);
    if (!user) {
        console.log('User not found. Please create an account first.');
    }
    else {
        console.log(`Your balance is $${user.balance}`);
    }
}
async function runBankApp() {
    while (true) {
        const mainMenu = await enquirer.prompt({
            type: 'select',
            name: 'choice',
            message: 'Bank App Console Menu',
            choices: [
                'Create Account',
                'Deposit',
                'Withdraw',
                'Check Balance',
                'Exit',
            ],
        });
        switch (mainMenu.choice) {
            case 'Create Account':
                await createAccount();
                break;
            case 'Deposit':
                await deposit();
                break;
            case 'Withdraw':
                await withdraw();
                break;
            case 'Check Balance':
                await checkBalance();
                break;
            case 'Exit':
                console.log('Thank you for using the Bank App. Goodbye!');
                process.exit(0);
        }
    }
}
console.log('Welcome to the Bank App Console');
runBankApp();
