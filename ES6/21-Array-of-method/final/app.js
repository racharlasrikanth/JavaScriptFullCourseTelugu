// Array.from and Array.of - NOT ON THE PROTOTYPE
// Array.from
// Array.of
// of creates a new Array instance from a variable number of arguments.

const example = ['one', 'two', 'three'];
// console.log(example);
// console.log(example.map);
// console.log(example.from);
// console.log(example.of);

const friends = Array.of('emma', 2, true);
console.log(friends);