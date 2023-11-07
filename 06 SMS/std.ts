// npm i inquirer
// npm i --save-dev @types/inquirer
// npm i --save-dev @types/inquirer

import inquirer from "inquirer";

import chalk from "chalk";

interface Student {
  name: string;
  studentId: number;
  courses: string[];
  balance: number;
}

const students: Student[] = [];

function generateUniqueId(): number {
  return Math.floor(Math.random() * 90000) + 10000;
}

async function addStudent(): Promise<Student> {
  const { name } = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter student name:",
    },
  ]);

  const student: Student = {
    name,
    studentId: generateUniqueId(),
    courses: [],
    balance: 0,
  };
  students.push(student);
  return student;
}

async function enrollStudent(student: Student): Promise<void> {
  const { course } = await inquirer.prompt([
    {
      type: "input",
      name: "course",
      message: "Enter course name to enroll:",
    },
  ]);

  student.courses.push(course);
}

async function payTuition(student: Student): Promise<void> {
  const { amount } = await inquirer.prompt([
    {
      type: "number",
      name: "amount",
      message: `Enter tuition fee amount for ${student.name}:`,
    },
  ]);

  student.balance += amount;
}

function viewBalance(student: Student): void {
  console.log(chalk.green(`Balance for ${student.name}: $${student.balance}`));
}

function showStatus(student: Student): void {
  console.log(chalk.yellow("Student Status:"));
  console.log(chalk.cyan(`Student ID: ${student.studentId}`));
  console.log(chalk.cyan(`Name: ${student.name}`));
  console.log(chalk.cyan(`Courses Enrolled: ${student.courses.join(', ')}`));
  viewBalance(student);
}

async function main(): Promise<void> {
  while (true) {
    const { choice } = await inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message: "Choose an action:",
        choices: ["Add Student", "Enroll Student", "Pay Tuition", "Show Status", "Exit"],
      },
    ]);

    switch (choice) {
      case "Add Student":
        const newStudent = await addStudent();
        console.log(chalk.green(`Added student: ${newStudent.name}`));
        break;
      case "Enroll Student":
        const enrollStudentName = await inquirer.prompt([
          {
            type: "input",
            name: "studentName",
            message: "Enter the name of the student to enroll:",
          },
        ]);
        const studentToEnroll = students.find((s) => s.name === enrollStudentName.studentName);
        if (studentToEnroll) {
          await enrollStudent(studentToEnroll);
          console.log(chalk.green(`Enrolled student in a course: ${studentToEnroll.name}`));
        } else {
          console.log(chalk.red("Student not found."));
        }
        break;
      case "Pay Tuition":
        const payTuitionStudentName = await inquirer.prompt([
          {
            type: "input",
            name: "studentName",
            message: "Enter the name of the student to pay tuition for:",
          },
        ]);
        const studentToPayTuition = students.find((s) => s.name === payTuitionStudentName.studentName);
        if (studentToPayTuition) {
          await payTuition(studentToPayTuition);
          console.log(chalk.green(`Paid tuition for student: ${studentToPayTuition.name}`));
        } else {
          console.log(chalk.red("Student not found."));
        }
        break;
      case "Show Status":
        const showStatusStudentName = await inquirer.prompt([
          {
            type: "input",
            name: "studentName",
            message: "Enter the name of the student to show status for:",
          },
        ]);
        const studentToShowStatus = students.find((s) => s.name === showStatusStudentName.studentName);
        if (studentToShowStatus) {
          showStatus(studentToShowStatus);
        } else {
          console.log(chalk.red("Student not found."));
        }
        break;
      case "Exit":
        console.log(chalk.yellow("Exiting Student Management System."));
        process.exit(0);
        break;
      default:
        console.log(chalk.red("Invalid choice. Please select a valid option."));
        break;
    }
  }
}

main();
