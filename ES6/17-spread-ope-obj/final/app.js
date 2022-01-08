// Spread Operator ...
// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them.
// ES2018 - ES8

const person = { name: 'emma', job: 'actor' };
const newPerson = { ...person, city: 'london', name: 'emma watson' };
console.log(person);
console.log(newPerson);