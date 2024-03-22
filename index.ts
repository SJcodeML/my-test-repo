#! usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";

const answer = await inquirer.prompt([
    { message : "Enter your First number " , type : "number" , name: "firstNumber"},
    {message :"Enter your second number " ,  type : "number" ,  name : "secondNumber"},
    {message :"Choose one operator  for an operation" , 
    type:"list" ,
    name:"operator" ,
    choices: ["Addition" , "Subtraction" , "Multiplication" , "Division"]}

])

console.log(answer);

//using if else condition

// if (answer.operator === "Addition") {
//     console.log((answer.firstNumber + answer.seconfNumber));
// }
// else if (answer.operator === "Subtraction"){
//     console.log(answer.firstNumber - answer.seconfNumber);
// }
// else if (answer.operator === "Multiplication"){
//     console.log(answer.firstNumber * answer.seconfNumber);
// }
// else if (answer.operator === "Division"){
//     console.log(answer.firstNumber / answer.seconfNumber);
// }
// else {
//     console.log("Please select a valid operator")
// }

//syntax of  code with chalk 
// if (answer.operator === "Addition") {
//     console.log(chalk.green.bold(answer.firstNumber + answer.secondNumber));
//   }


//using if else condition with string and chalk function

if (answer.operator === "Addition") {
    console.log(chalk.green.bold(`Adding ${answer.firstNumber} and ${answer.secondNumber}`));
    console.log(chalk.bgBlueBright.bold(`Result: ${answer.firstNumber + answer.secondNumber}`));
}
else if (answer.operator === "Subtraction") {
    console.log(chalk.bgCyan.bold(`Subtracting ${answer.firstNumber} and ${answer.secondNumber}`));
    console.log(chalk.bgGreenBright(`Result: ${answer.firstNumber - answer.secondNumber}`));
}
else if (answer.operator === "Multiplication") {
    console.log(chalk.bgBlack.bold(`Multiplying ${answer.firstNumber} and ${answer.secondNumber}`));
    console.log(chalk.bgGray.bold(`Result : ${answer.firstNumber * answer.secondNumber}`));
}
else if (answer.operator === "Division") {
    console.log(chalk.bgBlue.bold(`Dividing ${answer.firstNumber} and ${answer.secondNumber}`));
    console.log(chalk.bgBlue.bold(`Result: ${answer.firstNumber / answer.secondNumber}`));
}
else {
    console.log("Enter a valid operator");
}
 
