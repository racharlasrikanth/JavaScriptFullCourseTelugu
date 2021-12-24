class Account {
    constructor(name, initialBalance) {
      this.name = name;
      this.balance = initialBalance;
    }
    bank = 'Chase';
    deposit(amount) {
      this.balance += amount;
      console.log(`Hello ${this.name}, your balance is ${this.balance}`);
    }
  }
  
  const srikanth = new Account('srikanth', 0);
  console.log(srikanth);
  console.log(srikanth.name);
  srikanth.deposit(500);
  console.log(srikanth.bank);
  
  const emma = new Account('emma', 700);
  console.log(emma);
  console.log(emma.name);
  emma.deposit(1000);
  console.log(emma.bank);