var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nota1 = parseFloat(lines[0]);
var nota2 = parseFloat(lines[1]);
const peso1 = 3.5;
const peso2 = 7.5;  
const somaNotascomPeso = (nota1 * peso1) + (nota2 * peso2); 
const somaPesos = peso1 + peso2;
const mediaFinal = somaNotascomPeso / somaPesos;

console.log("MEDIA =", mediaFinal.toFixed(5)); 