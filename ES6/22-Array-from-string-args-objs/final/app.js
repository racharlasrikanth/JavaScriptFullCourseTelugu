// Array.from and Array.of - NOT ON THE PROTOTYPE

// from - returns Array Object from any object with a length property or an iterable object
// from turns array-like/ish into array - string,nodeList,Set

const youtube = 'youtube';
console.log(Array.from(youtube));

function countTotal() {
  // console.log(arguments);
  let total = Array.from(arguments).reduce(
    (total, currNum) => (total += currNum),
    0
  );
  console.log(total);
}

countTotal(67, 89, 54, 100);