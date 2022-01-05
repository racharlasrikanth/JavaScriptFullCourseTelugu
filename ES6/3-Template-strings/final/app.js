// Template Strings/Literals

const name = "emma";
const lastName = "watson";
const age = 27;

const phrase =
  "My full name is " +
  name +
  " " +
  lastName +
  " and I'm " +
  age +
  " years old.";
const phrase2 = `My full name is ${name} ${lastName.toUpperCase()} and I'm ${age *
  2} years old`;
console.log(phrase2);