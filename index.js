#! /usr/bin/env node
// SHABANG (Jargon)
import inquirer from "inquirer";
// 1- Computer will generate a random number---    complete
// 2- User will guess the number (input)    ---    complete
// 3- compare both the numbers and show the result --- complete
//Math.random se random number aye ga
//Math.random points mein number deta he hence, whole number mein lanay k liye Math.floor use hoga.
//lekin ab value 0 rahay gi bcz Math.random 0 se nichay ki value dega so we'll use * by any No. (eg 6)
//moreover dice etc mein 0 to hota hi nahi to agar 0 agaia phir?? therefore we'll use + 1
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 - 6: ",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the right number.");
}
else {
    console.log("You've guessed the wrong number.");
}
