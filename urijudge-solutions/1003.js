var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = lines.shift();
const B = lines.shift();
const SOMA = A + B;
console.log('SOMA = ' + SOMA);