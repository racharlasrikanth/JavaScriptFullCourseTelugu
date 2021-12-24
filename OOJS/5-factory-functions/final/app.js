// Blue Print
// Factory Functions and Constructor Functions
// Factory Functions

// const srikanth = {
//   firstName: 'srikanth',
//   lastName: 'racharla',
//   fullName: function () {
//     console.log(
//       `My full name is ${this.firstName} ${this.lastName} and I love JS`
//     );
//   },
// };
// const emma = {
//   firstName: 'emma',
//   lastName: 'watson',
//   fullName: function () {
//     console.log(`My full name is ${this.firstName} ${this.lastName}`);
//   },
// };

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
  
  const srikanth = createPerson('srikanth', 'racharla');
  srikanth.fullName();
  const daniel = createPerson('hello', 'apple');
  daniel.fullName();
  const emma = createPerson('bob', 'jordan');
  emma.fullName();