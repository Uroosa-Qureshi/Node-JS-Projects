import inquirer from "inquirer";
import chalk from "chalk";
// Classes Player and Opponent
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        this.fuel -= 25;
    }
    fuelIncrease() {
        this.fuel += 25;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        this.fuel -= 25;
    }
    fuelIncrease() {
        this.fuel += 25;
    }
}
// Player name
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please enter your name:",
});
// Opponent name
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select your opponent",
    choices: ["Skeleton", "Assassin", "Zombie"],
});
// Gather data
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
while (p1.fuel > 0 && o1.fuel > 0) {
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your action",
            choices: ["Attack", "Drink Potion", "Run for life"],
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            console.log(num);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`)}`);
                console.log(`${chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`)}`);
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`)}`);
                console.log(`${chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`)}`);
            }
        }
        if (ask.opt == "Drink Potion") {
            p1.fuelIncrease();
        }
        if (ask.opt == "Run for life") {
            console.log(chalk.bold.red.italic("You lose. Better luck next time."));
            break; // Exit the game if the player chooses to run for life
        }
    }
}
if (p1.fuel <= 0) {
    console.log(chalk.bold.red("You ran out of fuel. Game over!"));
}
else if (o1.fuel <= 0) {
    console.log(chalk.bold.green("You defeated your opponent. You win!"));
}
