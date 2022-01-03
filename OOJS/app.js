class Account{
    constructor(name, initialBalance){
        this.name = name;
        this.balance = initialBalance;
    }

    bankName = "Chase"
    deposit(amount){
        this.balance += amount;
        console.log(`Hello ${this.name}, your balance is ${this.balance}`);
    }
    fullName(){
        console.log("Hello");
    }
}

const emma = new Account("emma", 100);
console.log(emma);
emma.deposit(1000)


// function Account(name, initialBalance) {
//     this.name = name;
//     this.balance = initialBalance;
// }
// const srikanth = new Account('srikanth', 200);
// Account.prototype.deposit = function (amount) {
//     this.balance += amount;
//     console.log(`Hello ${this.name}, your balance is ${this.balance}`);
//   };