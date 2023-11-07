// import inquirer from "inquirer";
// function counter(paragragh:string){
//     let freeWhiteSpace = paragragh.replace(/\s/g,"")
//     return freeWhiteSpace.length
// }
// async function startWordCount(){
//     let res = await inquirer.prompt({
//         type:"input",
//         message: "Write paragragh here....",
//         name: "paragragh"
//     })
//     return console.log(counter(res.paragragh))
// }
// startWordCount()
//Countdown Date
// function counter(paragraph: string) {
//   let freeWhiteSpace = paragraph.replace(/\s/g, "");
//   return freeWhiteSpace.length;
// }
// async function startWordCount() {
//   let res = await inquirer.prompt({
//     type: "input",
//     message: "Write paragraph here....",
//     name: "paragraph",
//   });
//   console.log(counter(res.paragraph));
// }
// startWordCount();
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
const res = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "Please enter the amount of seconds",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please enter valid number";
        }
        else if (input > 60) {
            return "Seconds must be in 60";
        }
        else {
            return true;
        }
    }
});
let input = res.userInput;
function startTime(val) {
    const intTime = new Date();
    intTime.setSeconds(intTime.getSeconds() + val);
    const interValTime = new Date(intTime);
    const intervalId = setInterval(() => {
        const currentTime = new Date();
        const timediff = differenceInSeconds(interValTime, currentTime);
        if (timediff <= 0) {
            console.log("Timer has expired");
            clearInterval(intervalId); // Clear the interval to stop the countdown
            process.exit();
        }
        const min = Math.floor((timediff % (3600 * 24)) / 60);
        const sec = Math.floor(timediff % 60);
        console.log(`${min}:${sec}`);
    }, 1000); // 1000 milliseconds = 1 second
}
startTime(input);
