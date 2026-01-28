var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valores = lines[0].trim().split(" ").map(Number);

let valoresOriginais = [...valores];
valores.sort((a, b) => a - b);

console.log(valores[0]);
console.log(valores[1]);
console.log(valores[2]);

console.log("");

console.log(valoresOriginais[0]);
console.log(valoresOriginais[1]);
console.log(valoresOriginais[2]);
