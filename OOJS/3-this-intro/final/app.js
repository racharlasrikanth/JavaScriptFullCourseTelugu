// this
// points to the left of the dot

const srikanth = {
    firstName: 'srikanth',
    lastName: 'racharla',
    fullName: function () {
      console.log(this);
      console.log(`My full name is ${this.firstName} ${this.lastName}`);
    },
  };
  const emma = {
    firstName: 'emma',
    lastName: 'watson',
    fullName: function () {
      console.log(this);
      console.log(`My full name is ${this.firstName} ${this.lastName}`);
    },
  };
  
  srikanth.fullName();
  emma.fullName();