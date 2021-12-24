// Blue Print
// Factory Functions and Constructor Functions
// Constructor Functions
// new - creates new object, points to it, omit return

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
      console.log(
        `My full name is ${this.firstName} ${this.lastName} and I love React`
      );
    };
    console.log(this);
  }
  const srikanth = new Person('srikanth', 'racharla');
  srikanth.fullName();
  const emma = new Person('emma', 'watson');
  emma.fullName();
  
  function createPerson(firstName, lastName) {
    return {
      firstName: firstName,
      lastName: lastName,
      fullName: function () {
        console.log(
          `My full name is ${this.firstName} ${this.lastName} and I love JS`
        );
      },
    };
  }