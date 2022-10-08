const moduless = require('./app');

console.log(moduless);
console.warn(moduless.x);
const arr = [1,2,3,45,6,4,3];

let result = arr.filter((item) => {
  return  item==3;
})

console.log(result);
const fs = require('fs');
fs.writeFileSync("hello.txt","hiiiiiiiiiiiiiiii");

const fs = require('fs');
