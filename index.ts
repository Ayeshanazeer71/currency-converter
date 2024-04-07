#!/usr/bin/env node

import inqirer from "inquirer";
import chalk from "chalk";

console.log(("\n \t Welcome to currency converter\n"));

// Define the list of currencies and thier exchange rates
let exchange_rate: any = {
   "USD" : 1,              
   "EUR" : 0.85,
   "JYP" : 113,
   "CAD" : 1.3,
   "AUD" : 1.65,
   "PKR" : 277.70,

}
// PROMT THE USER TO SELECT CURRENCIES TO CONVERT FROM AND TO
let user_anwer = await inqirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from:",
        choices: ["USD","EUR", "JYP", "CAD", "AUD", "PKR"]
        
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currency to convert into:",
        choices: ["USD","EUR", "JYP", "CAD", "AUD", "PKR"]
        

    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:",


    }
]);

// PERFORM CURRENCY CONVERSION BY USING FORMULA

let from_amount =  exchange_rate[user_anwer.from_currency];
let to_amount = exchange_rate[user_anwer.to_currency];
let amount = user_anwer.amount

// FORMULA OF CONVERSION

let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

// DISPLAY  THE CONVERTED AMOUNT

console.log(`converted_amount = ${chalk.green(converted_amount)}`);





