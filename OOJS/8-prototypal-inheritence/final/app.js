/*
Prototypal Inheritance Model
Javascript uses prototypal inheritance model. That means that every constructor function/class has a prototype property that is shared by every instance of the constructor/class. So any properties and methods or prototype can be acessed by every instance. prototype property returns a object
*/

function Account(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
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
  
  srikanth.deposit(300);
  emma.deposit(1000);