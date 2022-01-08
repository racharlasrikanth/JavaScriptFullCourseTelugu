// Destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables
// Arrays

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['emma', 'watson', 'harry', 'daniel', 'venne'];

const orange = fruits[0];
const banana = fruits[1];
const lemon = fruits[2];
console.log(orange, banana, lemon);

const [emma, , enemy, harry, susan] = friends;
console.log(emma, enemy, harry, susan);