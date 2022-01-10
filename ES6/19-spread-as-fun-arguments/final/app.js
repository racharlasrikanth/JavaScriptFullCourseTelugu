// Spread Operator ...
// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them.

const numbers = [23, 45, 66, 88, 2345];

console.log(Math.max(...numbers));

const emma = ['emma', 'watson'];

const sayHello = (name, lastName) => {
  console.log(`Hello ${name} ${lastName}`);
};

sayHello(...emma);