var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var linhas = input.trim().split('\n');
var raio = parseFloat(linhas[0]);

var n = 3.14159;

var area = n * (raio * raio);

console.log("A=" + area.toFixed(4));