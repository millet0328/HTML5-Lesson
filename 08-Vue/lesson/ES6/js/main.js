// 按需加载
import { year, fullName } from './profile.js';

// 全部加载
import people from './data.js';

var age = new Date().getFullYear() - year;

console.log('今年年龄：',age);

