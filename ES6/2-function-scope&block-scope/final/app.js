// var, let , const
// let, const - blocked scoped {} - anything within {}
// var - function scoped

// global scope

console.log(amount);
let amount = 100;

function greet() {
  // local scope
  var random = 'some random value';
  console.log(`hello there ${amount} ${random}`);
}
// console.log(random);

// greet();

let total = 1000;
let test = true;

if (test) {
  // local scope
  let total = 'oranges and onions';
  let value = 'some random value';
  console.log('hello there');
}

// console.log(value);
{
  let total = 100;
  console.log(total);
}
{
  let total = 100;
  console.log(total);
}

console.log(total);