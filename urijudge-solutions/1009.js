var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const sellerName = lines.shift();
const salary = parseFloat(lines.shift());
const monthSales = parseFloat(lines.shift());

const total = salary + (monthSales * 0.15);

console.log("TOTAL = R$ " + total.toFixed(2));