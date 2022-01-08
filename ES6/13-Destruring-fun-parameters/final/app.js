// Destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables
// As Function Arguments

const emma = {
    first: 'emma',
    last: 'watson',
    city: 'london',
    siblings: {
      sister: 'hermoine',
    },
  };
  
  function printPerson({ first, last, city }) {
    // const { first, last, city } = person;
    console.log(first, last, city);
  }
  
  printPerson(emma);