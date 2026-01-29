var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');
var nome = (lines.shift());
var salario = parseFloat(lines.shift());
var totalvendas = parseFloat(lines.shift());
var comissao = totalvendas * 0.15;
var receber = salario + comissao

console.log("TOTAL = R$ " + receber.toFixed(2));