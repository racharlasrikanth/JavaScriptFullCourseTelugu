// default parameters, arrow function gotchas

const emma = 'emma';
const harry = 'harry';

function sayHi(person = 'Susan') {
  console.log(`Hi ${person}`);
}
const sayHello = (person = 'EMMA') => console.log(`Hello ${person}`);

sayHi();
sayHello(harry);