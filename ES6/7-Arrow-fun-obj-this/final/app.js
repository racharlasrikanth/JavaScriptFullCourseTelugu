// Arrow Functions or Fat Arrow Functions
// 'this' keyword

const emma = {
    firstName: "emma",
    lastName: "watson",
    sayName: function() {
      console.log(this);
      setTimeout(() => {
        console.log(this);
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
      }, 1000);
    },
  };
  
  const harry = {
    firstName: "harry",
    lastName: "potter",
    sayName: () => {
      console.log(this);
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    },
  };
  
  emma.sayName();
  harry.sayName();