#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.white("====================================="));
console.log(chalk.bold.yellow("        Currency Converter!"));
console.log(chalk.bold.white("====================================="));
const currency: any = {
  USD: 1,
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
  DIR: 3.67,
  AFN: 72,
};

let userAns = await inquirer.prompt([
  {
    name: "from",
    message: "Enter The Form Of Currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR", "DIR", "AFN"],
  },
  {
    name: "to",
    message: "Enter The Form Of Currency To Connvert In",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR", "DIR", "AFN"],
  },
  {
    name: "amount",
    message: "Enter Your Amount",
    type: "number",
  },
]);
let fromAmount = currency[userAns.from];
let toAmount = currency[userAns.to];
let amount = userAns.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(`Converted Amount: ${chalk.red(convertedAmount)}`);
