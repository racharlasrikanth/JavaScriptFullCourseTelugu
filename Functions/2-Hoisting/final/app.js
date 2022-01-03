// Hoisting
// function and var declarations are hoisted
// safer to access only after initialized
display();
moreComplex();
console.log(display);
console.log(moreComplex);
// console.log(firstName);
// console.log(lastName);
// console.log(random);

const firstName = 'emma';
let lastName = 'watson';
var random = 'random';

function display() {
  console.log('hello world');
}

function moreComplex() {
  console.log(` ${random}`);
}