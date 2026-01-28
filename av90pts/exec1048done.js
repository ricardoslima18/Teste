var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var salario = parseFloat(input);

let percentual;

if (salario <= 400.00) {
    percentual = 15;
} else if (salario <= 800.00) {
    percentual = 12;
} else if (salario <= 1200.00) {
    percentual = 10;
} else if (salario <= 2000.00) {
    percentual = 7;
} else {
    percentual = 4;
}
let reajuste = salario * (percentual / 100);
let novoSalario = salario + reajuste;
console.log("Novo salario: " + novoSalario.toFixed(2));
console.log("Reajuste ganho: " + reajuste.toFixed(2));
console.log("Em percentual: " + percentual + " %");
