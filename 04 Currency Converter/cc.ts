// // npm i inquirer
// // npm i --save-dev @types/inquirer

// import inquirer from "inquirer";

// let convertoin = {
//   "PKR":{
//     "USD": 0.0044,
//     "GBP": 0.0037,
//     "PKR": 1
//   },
//   "GBP":{
//     "USD": 1.21,
//     "PKR":271.79,
//     "GBP": 1
//   },
//   "USD":{
//     "PKR": 225.50,
//     "GBP": 0.83,
//     "USD": 1
//   }
// }
// const answer:  {
//   from: "USD" | "GBP" | "PKR"
//   to: "USD" | "GBP" | "PKR"
//   amount: number
// }
// = await inquirer.prompt([{
//   type: "list",
//   name: "From",
//   choices: ["PKR", "USD", "GBP"],
//   message: "Select your currency"
// },
// {
//   type: "list",
//   name: "to",
//   choices: ["PKR", "USD", "GBP"],
//   message: "Select your convertion currency"
// },
// {
//   type: "number",
//   name: "Amount",
//   choices: ["PKR", "USD", "GBP"],
//   message: "Select your convertion amount"
// }
// ]);
// const{from, to, amount} = answer;
// if(from && to && amount){
//   let result = convertoin[from][to] * amount;
//   console.log(`Your convertion from ${from} to ${to} is ${result}`)

// }else {
//   console.log("Invailid input")
// }




//2
import inquirer from "inquirer";
import chalk from "chalk";

const conversionRates = {
  PKR: {
    USD: 0.0044,
    GBP: 0.0037,
    PKR: 1,
  },
  GBP: {
    USD: 1.21,
    PKR: 271.79,
    GBP: 1,
  },
  USD: {
    PKR: 225.50,
    GBP: 0.83,
    USD: 1,
  },
};

async function main() {
  const answer: {
    from: "USD" | "GBP" | "PKR";
    to: "USD" | "GBP" | "PKR";
    amount: number;
  } = await inquirer.prompt([
    {
      type: "list",
      name: "from",
      choices: ["PKR", "USD", "GBP"],
      message: "Select your currency to convert from:",
    },
    {
      type: "list",
      name: "to",
      choices: ["PKR", "USD", "GBP"],
      message: "Select your currency to convert to:",
    },
    {
      type: "number",
      name: "amount",
      message: "Enter the amount to convert:",
    },
  ]);

  const { from, to, amount } = answer;

  if (from && to && amount) {
    const result = conversionRates[from][to] * amount;

    console.log(chalk.green(`Conversion Result:`));
    console.log(`From: ${chalk.yellow(from)}`);
    console.log(`To: ${chalk.yellow(to)}`);
    console.log(`Amount: ${chalk.yellow(amount)}`);
    console.log(`Result: ${chalk.green(result.toFixed(2))} ${to}`);
  } else {
    console.log(chalk.red("Invalid input"));
  }
}

main();
