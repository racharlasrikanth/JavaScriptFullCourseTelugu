/* In Reg Functions (not arrow) "this"
determined by "HOW"!!! a function is invoked (left of .)

defaults to global - window
arrow functions - pump the breaks
*/

// console.log(this);

function showThis() {
    console.log(this);
  }
  
  const srikanth = {
    name: 'srikanth',
    showThis: showThis,
  };
  const emma = {
    name: 'emma',
    showThis: showThis,
  };
  
  srikanth.showThis();
  emma.showThis();
  
  showThis();
  const btn1 = document.querySelector('.btn-1');
  const btn2 = document.querySelector('.btn-2');
  
  btn1.addEventListener('click', showThis);
  btn2.addEventListener('click', showThis);
  btn2.addEventListener('click', function () {
    showThis();
  });