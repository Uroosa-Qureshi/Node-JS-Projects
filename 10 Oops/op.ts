
import inquirer from "inquirer";

class Student {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
}

class Person {
    student: Student[] = [];
    addStudent(obj: Student) {
        this.student.push(obj);
    }
}

const person = new Person();

const programstart = async (person: Person) => {
    console.log("Welcome guest");
    const ans = await inquirer.prompt({
        type: "list",
        message: "To whom would you like?",
        name: "select",
        choices: ["Self", "Rockstar"]
    });

    if (ans.select === "Self") {
        console.log("Hello, I'm talking to myself");
        console.log("I'm fit!");
    }
    if (ans.select === "Rockstar") {
        const ans = await inquirer.prompt({
            type: "input",
            message: "To which Rockstar you want to talk",
            name: "student",
        });

        const student = person.student.find(val => val.name === ans.student);

        if (!student) {
            const name = new Student(ans.student);
            person.addStudent(name);

            console.log(`Hello, I'm ${name.name}, and I'm fit`);
        } else {
            console.log(`Hello, I'm ${student.name}, and I'm fit............`);
        }
    }
};

programstart(person);
