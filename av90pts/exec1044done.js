var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B] = lines[0].trim().split(" ").map(Number);

if (A % B === 0 || B % A === 0) {
    console.log("Sao Multiplos");
} else {
    console.log("Nao sao Multiplos");
}