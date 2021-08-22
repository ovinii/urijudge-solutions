var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = lines.shift();
const B = lines.shift();
const C = lines.shift();
const D = lines.shift();

const diferenca = ((A * B) - (C * D));

console.log("DIFERENCA = " + diferenca);