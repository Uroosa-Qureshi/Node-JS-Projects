"use strict";
// #!/user/bin/env node
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//npm i --save-dev @types/chalk-animation
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
const chalk_animation_1 = __importDefault(require("chalk-animation"));
const div_js_1 = require("./operators.ts/div.js");
const add_js_1 = require("./operators.ts/add.js");
const sub_js_1 = require("./operators.ts/sub.js");
const mul_js_1 = require("./operators.ts/mul.js");
const sleep = () => {
    return new Promise((res) => { setTimeout(res, 4000); });
};
async function main() {
    let rainbowTitle = chalk_animation_1.default.rainbow(`Welcome to UQ's Calculator!`);
    await sleep();
    rainbowTitle.stop();
    while (true) {
        let answer = await inquirer_1.default.prompt([
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
        const numbers = await inquirer_1.default.prompt([
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
                result = (0, add_js_1.add)(numbers.num1, numbers.num2);
            }
            else if (answer.operation === "Subtraction") {
                result = (0, sub_js_1.subtract)(numbers.num1, numbers.num2);
            }
            else if (answer.operation === "Multiplication") {
                result = (0, mul_js_1.multiply)(numbers.num1, numbers.num2);
            }
            else if (answer.operation === "Division") {
                if (numbers.num2 === 0) {
                    throw new Error("Cannot divide by zero");
                }
                result = (0, div_js_1.divide)(numbers.num1, numbers.num2);
            }
            console.log(`Result: ${result}`);
        }
        catch (error) {
            console.error(chalk_1.default.red(error.message));
        }
    }
}
// Call the main function to start the program
main();
