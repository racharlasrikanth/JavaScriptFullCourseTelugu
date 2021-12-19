// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// childNodes - returns all childNodes including whitespace which is treated as a text node

// children
// firstChild
// lastChild

const result = document.querySelector('#result');
const allChildren = result.childNodes;
// console.log(allChildren);

const children = result.children;
console.log(children);

console.log(result.firstChild);
console.log(result.lastChild);