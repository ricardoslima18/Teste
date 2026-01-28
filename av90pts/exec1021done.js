var input = require('fs').readFileSync('/dev/stdin', 'utf8');

let valor = parseFloat(input);
let valorTotal = Math.round(valor * 100); 

console.log("NOTAS:");

let notas100 = Math.floor(valorTotal / 10000);
valorTotal = valorTotal % 10000;
console.log(notas100 + " nota(s) de R$ 100.00");

let notas50 = Math.floor(valorTotal / 5000);
valorTotal = valorTotal % 5000;
console.log(notas50 + " nota(s) de R$ 50.00");

let notas20 = Math.floor(valorTotal / 2000);
valorTotal = valorTotal % 2000;
console.log(notas20 + " nota(s) de R$ 20.00");

let notas10 = Math.floor(valorTotal / 1000);
valorTotal = valorTotal % 1000;
console.log(notas10 + " nota(s) de R$ 10.00");

let notas5 = Math.floor(valorTotal / 500);
valorTotal = valorTotal % 500;
console.log(notas5 + " nota(s) de R$ 5.00");

let notas2 = Math.floor(valorTotal / 200);
valorTotal = valorTotal % 200;
console.log(notas2 + " nota(s) de R$ 2.00");

console.log("MOEDAS:");

let moedas1 = Math.floor(valorTotal / 100);
valorTotal = valorTotal % 100;
console.log(moedas1 + " moeda(s) de R$ 1.00");

let moedas50 = Math.floor(valorTotal / 50);
valorTotal = valorTotal % 50;
console.log(moedas50 + " moeda(s) de R$ 0.50");


let moedas25 = Math.floor(valorTotal / 25);
valorTotal = valorTotal % 25;
console.log(moedas25 + " moeda(s) de R$ 0.25");


let moedas10 = Math.floor(valorTotal / 10);
valorTotal = valorTotal % 10;
console.log(moedas10 + " moeda(s) de R$ 0.10");

let moedas5 = Math.floor(valorTotal / 5);
valorTotal = valorTotal % 5;
console.log(moedas5 + " moeda(s) de R$ 0.05");

let moedas01 = valorTotal; 
console.log(moedas01 + " moeda(s) de R$ 0.01");