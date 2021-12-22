// Web Storage API - provided by browser
// session storage, local storage
// setItem, getItem , removeItem, clear

// localStorage.setItem('name','john')
// sessionStorage.setItem('name','john')

localStorage.setItem('name', 'john');
localStorage.setItem('friend', 'peter');
localStorage.setItem('job', 'developer');
localStorage.setItem('address', 'street 123');

const name = localStorage.getItem('name');
console.log(name);

localStorage.removeItem('name');
const anotherName = localStorage.getItem('name');
console.log(anotherName);
localStorage.clear();