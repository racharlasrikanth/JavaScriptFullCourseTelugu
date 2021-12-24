// All Objects in Javascript have access to constructor property that returns a constructor function that created it.
// built in constructor functions
// arrays and functions are objects in javascript

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
      console.log(
        `My full name is ${this.firstName} ${this.lastName} and I love React`
      );
    };
  }
  
  const srikanth = new Person('srikanth', 'sanders');
  // console.log(srikanth.constructor);
  
  const emma = {};
  console.log(emma.constructor);
  const list = [];
  console.log(list.constructor);
  const sayHi = function () {};
  console.log(sayHi.constructor);
  
  const watson = new emma.constructor('watson', 'carpenter');
  watson.fullName();