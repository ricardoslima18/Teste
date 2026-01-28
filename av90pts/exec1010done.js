var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var linhas = input.split('\n');

var [item1, qtd1, valor1] = linhas[0].split(' ');
item1 = parseInt(item1);
qtd1 = parseInt(qtd1);
valor1 = parseFloat(valor1);

var [item2, qtd2, valor2] = linhas[1].split(' ');
item2 = parseInt(item2);
qtd2 = parseInt(qtd2);
valor2 = parseFloat(valor2);

var total = (qtd1 * valor1) + (qtd2 * valor2);
console.log("VALOR A PAGAR: R$ " + total.toFixed(2));
