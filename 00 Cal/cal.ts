// #!/user/bin/env node

//npm i --save-dev @types/chalk-animation
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";


import { divide } from "./operators.ts/div.js";
import { add } from "./operators.ts/add.js";
import { subtract } from "./operators.ts/sub.js";
import { multiply } from "./operators.ts/mul.js";

const sleep = () => {
  return new Promise((res)=>{setTimeout(res, 4000);})
}

async function main() {

  let rainbowTitle = chalkAnimation.rainbow(`Welcome to UQ's Calculator!`);
  await sleep();
  rainbowTitle.stop();
 
  while (true) {
    let answer = await inquirer.prompt([
      {
        message: "Select operation",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Quit"],
        name: "operation",
      },
    ]);

    if (answer.operation === "Quit") {
      console.log("Hasta la vista!");
      break;
    }

    const numbers = await inquirer.prompt([
      {
        message: "Enter the first number",
        type: "number",
        name: "num1",
      },
      {
        message: "Enter the second number",
        type: "number",
        name: "num2",
      },
    ]);

    let result;
  

    try {
      if (answer.operation === "Addition") {
        result = add(numbers.num1, numbers.num2);
      } else if (answer.operation === "Subtraction") {
        result = subtract(numbers.num1, numbers.num2);
      } else if (answer.operation === "Multiplication") {
        result = multiply(numbers.num1, numbers.num2);
      } else if (answer.operation === "Division") {
        if (numbers.num2 === 0) {
          throw new Error("Cannot divide by zero");
        }
        result = divide(numbers.num1, numbers.num2);
      }
   
      console.log(`Result: ${result}`);
    } catch (error) {
     
      console.error(chalk.red(error.message));
    }
  }
}

// Call the main function to start the program
main(); 