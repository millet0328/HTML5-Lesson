import { year, talk } from './profile.js';

import tools from './data.js';

tools.timestamp()

var now = new Date();
var currentYear = now.getFullYear();
var age = currentYear - year;

talk();
