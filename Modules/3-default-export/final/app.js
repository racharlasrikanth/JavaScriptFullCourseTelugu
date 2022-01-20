// global name space / hard to navigate

import { random, people } from './utils/data.js';
import showPeople from './utils/showPeople.js';

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  container.innerHTML = showPeople(people);
});
