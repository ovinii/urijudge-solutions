var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pi = 3.14159;
const raio = parseFloat(lines.shift());
const area = ((raio ** 2) * pi).toFixed(4);

console.log('A=' + area)