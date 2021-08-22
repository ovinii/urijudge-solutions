var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const num = lines.shift();
const hours = lines.shift();
const moneyPerHour = lines.shift();

const salary = hours * moneyPerHour;

console.log("NUMBER = " + num);
console.log("SALARY = U$ " + salary.toFixed(2));