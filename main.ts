#! /usr/bin/env
import inquirer from "inquirer";
let myBalance = 1000;
let myPin = 6969;

let pinAnswer = await inquirer.prompt([
   {
    name:"pin",
    message:"Enter your PIN:",
    type:"number",
   }
])
if(pinAnswer.pin === myPin){
    console.log("Correct PIN code!");
let operationAnswer = await inquirer.prompt([
    {
     name:"operation",
     message:"Please select a Transaction:",
     type:"list",
     choices:["Check Balance","Cash Withdrawal","Deposit","Set My Favourite Withdrawl"]
    }
]);
console.log(operationAnswer);
if(operationAnswer.operation === "Check Balance"){
    console.log(`Your current balance is: ${myBalance}`)
}
if(operationAnswer.operation === "Cash Withdrawal"){
   let accountAnswer = await inquirer.prompt([
    {
      name:"account",
      message:"Please select an account",
      type:"list",
      choices:["From Chequing","From Savings"]
    }
   ]);
   console.log(accountAnswer);
   if(accountAnswer.account === "From Chequing"){
    let amountAns = await inquirer.prompt([
        {
          name:"amount",
          message:"Enter your amount :",
          type:"number",
        }
       ]);
       if(amountAns.amount > myBalance){
        console.log("Insufficient balance")
       }
       else if(myBalance -= amountAns.amount){
    console.log(`Your remaining balance is: ${myBalance}`)
    console.log("Your transaction is complete!")
    }
    else {
        console.log("Your transaction is complete!")
    }
   }
   if(accountAnswer.account === "From Savings"){
    let amountAns = await inquirer.prompt([
        {
          name:"amount",
          message:"Enter your amount :",
          type:"number",
        }
       ]);
       if(amountAns.amount >= myBalance){
        console.log("Insufficient balance")
       }
       else if(myBalance -= amountAns.amount){
    console.log(`Your remaining balance is: ${myBalance}`)
    console.log("Your transaction is complete!")
    }
    else {
        console.log("Your transaction is complete!")
    }
   }
}
if(operationAnswer.operation === "Deposit"){
    let depositAnswer = await inquirer.prompt([
        {
         name:"deposit",
         message:"Please select an account:",
         type:"list",
         choices:["To Chequing","To Savings"]
        }
    ]); 
    console.log(depositAnswer) 
    if(depositAnswer.deposit === "To Chequing"){
        let chequingAnswer = await inquirer.prompt([
            {
             name:"chequing",
             message:"Enter amount you want to deposit :",
             type:"number",
            }
        ]);  
        console.log(chequingAnswer)
        console.log("Your Deposit is complete")
    }
   if(depositAnswer.deposit === "To Savings"){
    console.log("Insert all your cheques and cash you want to deposit into ATM")
    console.log("Your Deposit is complete")
}
}
if(operationAnswer.operation === "Set My Favourite Withdrawl"){
    let setFavourite = await inquirer.prompt([
        {
        name:"set",
        message:"Select an amount",
        type:"list",
        choices:["1000","2000","3000","4000","5000"]
        }
    ])
    console.log(setFavourite)
}
}
else{
    console.log("Incorrect PIN number")
}



    
