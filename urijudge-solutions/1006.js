var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = lines.shift();
const B = lines.shift();
const C = lines.shift();

const media = ((A * 2) + (B * 3) + (C * 5)) / 10;

console.log("MEDIA = " + media.toFixed(1));