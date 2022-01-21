// Javascript is single threaded, synchronous language.
//
console.log(`i'm first`);
console.log(`i'm second`);
console.log(`i'm third`);

console.log(`i'm first`);
boilingWater();
console.log(`i'm third`);

function boilingWater() {
  console.log('boiling...');
  for (let i = 0; i < 1000; i++) {
    console.log('still not done...');
  }
  console.log('done.');
}
