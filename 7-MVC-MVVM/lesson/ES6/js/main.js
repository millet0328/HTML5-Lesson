import { year, fullName } from './profile.js';

import friend from './data.js';

// 计算年龄
var age = new Date().getFullYear() - year;
console.log('年龄：%s', age);

console.log('歌手的名字：%s', fullName());

console.log(friend);