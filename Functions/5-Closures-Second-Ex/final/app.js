// Closure

function newAccount(name, initialBalance) {
    let balance = initialBalance;
    function showBalance() {
      console.log(`Hey ${name}, your balance is ${balance}`);
    }
    function deposit(amount) {
      balance += amount;
      showBalance();
    }
    function withdraw(amount) {
      if (amount > balance) {
        console.log(`Hey, ${name}, sorry not enough funds`);
        return;
      }
      balance -= amount;
      showBalance();
    }
    return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
  }
  
  const emma = newAccount('emma', 1000);
  const harry = newAccount('harry', 1000);
  
  emma.showBalance();
  emma.deposit(400);
  emma.deposit(1000);
  emma.withdraw(400);
  emma.balance = 10000;
  emma.withdraw(2001);
  harry.showBalance();
  harry.deposit(400);