import { year, fullName } from './profile.js';

import people from './data.js';

var age = new Date().getFullYear() - year;
var name = fullName();

console.log('%s 现在将 %i 岁', name, age);

console.log(people);