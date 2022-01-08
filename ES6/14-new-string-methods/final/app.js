// new string methods
// startsWith(), endsWith(), includes(),repeat()

const person = 'Emma Watson';
const employee = '23456-EMP-EMMA-SMITH';
const manager = '23456-MAN-HARRY-DOE';
// starts width
console.log(person.startsWith('Emm'));
console.log(person.startsWith('emma'));

// ends width
console.log(employee.startsWith('EMP', 6));
console.log(manager.endsWith('DOE'));
console.log(manager.endsWith('MAN', 9));
// includes
console.log(manager.includes('MAN'));
console.log(manager.includes('mAN'));

const multiplyPeople = (person, amount) => person.repeat(amount);

// repeat
const people = multiplyPeople(person, 10);
console.log(people);