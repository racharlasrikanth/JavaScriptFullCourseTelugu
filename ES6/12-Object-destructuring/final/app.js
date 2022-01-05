// Destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables
// Objects

const bob = {
    first: 'bob',
    last: 'sanders',
    city: 'chicago',
    siblings: {
      sister: 'jane',
    },
  };
  
  const {
    first: firstName,
    last,
    city,
    zip,
    siblings: { sister: favoriteSibling },
  } = bob;
  console.log(firstName, last, city, zip, favoriteSibling);
  
  // const firstName = bob.first;
  // const lastName = bob.last;
  // const sister = bob.siblings.sister;
  
  // console.log(firstName, lastName, sister);