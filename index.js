#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 278,
    TAKA: 109.81,
    RIYAL: 3.75,
    RAND: 18.64,
    WON: 1355.14,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'IND', 'PKR', 'TAKA', 'RIYAL', 'RAND', 'WON']
    },
    { name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'IND', 'PKR', 'TAKA', 'RIYAL', 'RAND', 'WON']
    },
    {
        name: "amount",
        message: "Enter your Amount",
        type: "number",
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
