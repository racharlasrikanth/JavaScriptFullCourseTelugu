// Closure

function newAccount(name, initialBalance) {
    let balance = initialBalance;
    function showBalance() {
      console.log(`Hey ${name}, your balance is ${balance}`);
    }
    return showBalance;
  }
  
  newAccount('susan', 500)();
  
  const emma = newAccount('emma', 300);
  const harry = newAccount('harry', 1000);
  
  emma();
  harry();