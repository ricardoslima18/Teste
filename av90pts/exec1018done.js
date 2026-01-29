var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let valor = parseInt(input);

console.log(valor);

let notas100 = Math.floor(valor / 100);
valor = valor % 100; 
console.log(notas100 + " nota(s) de R$ 100,00");

let notas50 = Math.floor(valor / 50);
valor = valor % 50;
console.log(notas50 + " nota(s) de R$ 50,00");

let notas20 = Math.floor(valor / 20);
valor = valor % 20;
console.log(notas20 + " nota(s) de R$ 20,00");

let notas10 = Math.floor(valor / 10);
valor = valor % 10;
console.log(notas10 + " nota(s) de R$ 10,00");

let notas5 = Math.floor(valor / 5);
valor = valor % 5;
console.log(notas5 + " nota(s) de R$ 5,00");


let notas2 = Math.floor(valor / 2);
valor = valor % 2;
console.log(notas2 + " nota(s) de R$ 2,00");

console.log(valor + " nota(s) de R$ 1,00");