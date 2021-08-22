var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [A, B] = input.split('\n').map(item => parseInt(item, 10));
const PROD = A * B;

console.log(`PROD = ${PROD}`);