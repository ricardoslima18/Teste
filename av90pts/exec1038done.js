var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = input.trim().split(/\s+/);

var codigo = parseInt(valores.shift());
var quantidade = parseInt(valores.shift());

var total = 0;

if (codigo === 1) total = quantidade * 4.00;
else if (codigo === 2) total = quantidade * 4.50;
else if (codigo === 3) total = quantidade * 5.00;
else if (codigo === 4) total = quantidade * 2.00;
else if (codigo === 5) total = quantidade * 1.50;
console.log("Total: R$ " + total.toFixed(2));