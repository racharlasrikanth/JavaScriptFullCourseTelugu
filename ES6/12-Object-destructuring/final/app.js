// Destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables
// Objects

const emma = {
    first: 'emma',
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
  } = emma;
  console.log(firstName, last, city, zip, favoriteSibling);
  
  // const firstName = emma.first;
  // const lastName = emma.last;
  // const sister = emma.siblings.sister;
  
  // console.log(firstName, lastName, sister);