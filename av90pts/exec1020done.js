var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var dia = parseInt(input );

let anos = Math.floor(dia/365);
let resto = dia % 365;

let meses = Math.floor(resto/30);

let dias = resto % 30;

console.log(anos + " ano(s)");
console.log(meses + " mes(es)");
console.log(dias + " dia(s)");