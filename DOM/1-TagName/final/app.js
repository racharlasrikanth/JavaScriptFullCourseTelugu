// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// getElementsByTagName('tagname');
// node-list =  array-like object
// index, lenght property but not array methods

const headings = document.getElementsByTagName('h2');
headings[0].style.color = 'red';
// console.log(headings.length);

const items = document.getElementsByTagName('li');

// items.forEach(function(item) {
//   console.log(item);
// });
items[2].style.color = 'orange';
const betterItems = [...items];

betterItems.forEach(function(item) {
  // console.log(item);
});

console.log(items);
console.log(betterItems);