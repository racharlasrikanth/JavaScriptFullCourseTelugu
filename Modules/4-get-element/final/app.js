// global name space / hard to navigate

import { random, people } from './utils/data.js';
import showPeople from './utils/showPeople.js';
import get from './utils/getElement.js';

const container = get('.container');
const btn = get('.btn');
// const container1 = get('.container1');
// console.log(container1);

btn.addEventListener('click', () => {
  container.innerHTML = showPeople(people);
});
