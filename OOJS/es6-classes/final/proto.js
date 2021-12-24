/*
ES6 Classes - Syntactic Sugar
Prototypal Inheritance

*/

function Account(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
    // this.bank = 'Bank Of America';
  }
  
  const srikanth = new Account('srikanth', 200);
  const emma = new Account('emma', 0);
  
  Account.prototype.bank = 'CHASE';
  Account.prototype.deposit = function (amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  };
  console.log(srikanth.bank);
  console.log(emma);
  