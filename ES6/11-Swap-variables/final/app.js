
let first = 'emma';
let second = 'harry';

console.log(first, second);

// first = 'harrry'
// second = 'emma';


// let temp = second;
// second = first;
// first = temp;

// const newArr = [first, second];
// console.log(newArr);


// let [one, two] = newArr;
// console.log(one, two);

[second, first] = [first, second];

console.log(first, second);