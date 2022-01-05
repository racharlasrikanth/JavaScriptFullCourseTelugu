// closures

function newAccount(name, initialBalance){
    let balance = initialBalance;
    function showBalance(){
        console.log(`Hey ${name}, your balance is ${balance}`);
    }
    function deposit(amount){
        // balance = balance + amount;
        balance += amount;
        showBalance();
    }
    function withdraw(amount){
        if(amount > balance){
            console.log(`Hey, ${name}, sorry not enough funds!!!`);
            return;
        }
        console.log('******* Withdraw *******');
        balance -= amount;
        showBalance();
    }
    return {
        showBalance: showBalance,
        deposit: deposit,
        withdraw: withdraw
    };
}

const emma = newAccount("emma", 1000);
console.log(emma);
emma.showBalance()
emma.deposit(3000);
emma.withdraw(2000)
emma.showBalance();
emma.balance = 10000;
emma.showBalance();

// const harry = newAccount("harry", 2000);
// console.log(harry);
// harry.showBalance();


// function outer(){
//     let privateVar = 'outer secret';
//     function inner(){
//         console.log(`hello there secret is: ${privateVar}`);
//     }
//     return inner;
//     // inner();
// }
// const resultFun = outer();
// resultFun();

// outer()();

// console.dir(outer());