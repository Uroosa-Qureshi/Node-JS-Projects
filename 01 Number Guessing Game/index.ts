// npm install inquirer
// npm install chalk
// add   "type":"module" in package.json which is after main.

import inquirer from 'inquirer';
import chalk from 'chalk';

const minNumber = 1;
const maxNumber = 10;
const maxAttempts = 3;

function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function startGame() {
  let playAgain = true;

  while (playAgain) {
    const targetNumber = generateRandomNumber(minNumber, maxNumber);
    let attempts = 0;

    console.log(chalk.bold.yellow('Let\'s Play Number Guessing Game! By: UQ'));
    console.log(chalk.cyan(`I'm thinking of a number between ${minNumber} and ${maxNumber}.`));
    console.log(chalk.magenta(`You have ${maxAttempts} attempts. Type ${chalk.bold.red('q')} to quit.`));

    while (attempts < maxAttempts) {
      const { guess } = await inquirer.prompt([
        {
          type: 'input',
          name: 'guess',
          message: 'Enter your guess:',
          validate: (input) => {
            if (input.toLowerCase() === 'q' || (parseInt(input, 10) >= minNumber && parseInt(input, 10) <= maxNumber)) {
              return true;
            }
            return `Please enter a valid number between ${minNumber} and ${maxNumber}, or 'q' to quit.`;
          },
        },
      ]);

      if (guess.toLowerCase() === 'q') {
        console.log(chalk.bold.red('Thanks for playing! The correct number was'), chalk.yellow(targetNumber));
        break;
      }

      attempts++;

      if (parseInt(guess, 10) === targetNumber) {
        console.log(chalk.bold.green(`Congratulations! You guessed the correct number ${ targetNumber}) in ${attempts} attempts.`));
        break;
      } else if (attempts === maxAttempts) {
        console.log(chalk.bold.red(`Sorry, you've reached the maximum number of attempts. The correct number was`), chalk.yellow(targetNumber));
        break;
      } else if (parseInt(guess, 10) < targetNumber) {
        console.log(chalk.yellow('Too low! Try again.'));
      } else {
        console.log(chalk.yellow('Too high! Try again.'));
      }
    }

    const { playAgainAnswer } = await inquirer.prompt([
      {
        type: 'list',
        name: 'playAgainAnswer',
        message: 'Do you want to play again?',
        choices: ['Yes', 'No'],
      },
    ]);

    playAgain = playAgainAnswer === 'Yes';
  }

  console.log(chalk.bold.yellow('Thanks for playing!'));
}

startGame();







