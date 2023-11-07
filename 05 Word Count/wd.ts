// //npm i --save-dev @types/cli-progress
// // npm install inquirer chalk cli-progress
// // npm install chalk
// // npm install inquirer


import inquirer from "inquirer";
import chalk from "chalk";
import { SingleBar } from "cli-progress";

async function main() {
  console.log(chalk.cyan("Welcome to the UQ's Word Count Tool!"));

  const answers = await inquirer.prompt([
    {
      name: "sentence",
      type: "input",
      message: chalk.yellow("Please enter a sentence to count the words:"),
    },
  ]);

  const sentence = answers.sentence;
  const words = sentence.trim().split(" ");

  // Create a progress bar with a custom format
  const progressBar = new SingleBar({
    format: `Calculating Word Count... [{bar}]`,
    barCompleteChar: "\u2588",
    barIncompleteChar: "\u2591",
    hideCursor: true,
  });

  progressBar.start(100, 0);

  // Simulate a delay to demonstrate the progress bar
  setTimeout(() => {
    progressBar.update(100);
    progressBar.stop();
    console.log(chalk.blue(`\nYour sentence word count is: ${words.length}\n`));
  }, 1000);
}

main();

