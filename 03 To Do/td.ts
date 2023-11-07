// // tsc --init
// // npm i -g typescript
// // npm init -y
// // npm i inquirer
// // npm i @types/inquirer -D
// npm install inquirer chalk boxen
// npm install chalk


import inquirer from "inquirer";
import chalk from "chalk";
import boxen from "boxen";

async function main() {
  const todo: string[] = [];
  let loop = true;

  while (loop) {
    const answer: {
      TODO: string;
      addmore: boolean;
    } = await inquirer.prompt([
      {
        type: "input",
        name: "TODO",
        message: "What do you want to add in your todo?",
      },
      {
        type: "confirm",
        name: "addmore",
        message: "Do you want to add more todo?",
        default: false,
      },
    ]);

    const { TODO, addmore } = answer;
    loop = addmore;

    if (TODO) {
      todo.push(TODO);
    } else {
      console.log(chalk.yellow("Please add valid input."));
    }
  }

  if (todo.length > 0) {
    console.log(chalk.green("Your TODO List"));

    const todoList = todo.map((item, index) => {
      return `${index + 1}. ${item}`;
    });

    const todoBox = boxen(todoList.join("\n"), {
      padding: 1,
      margin: 1,
      borderStyle: "round",
      borderColor: "green",
    });

    console.log(todoBox);
  } else {
    console.log(chalk.yellow("No todos found"));
  }
}

main();
