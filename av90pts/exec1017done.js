var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var valores = input.trim().split(/\s+/);

var tempo = parseInt(valores[0]);
var velocidade = parseInt(valores[1]);

var distancia = tempo * velocidade;

var litros = distancia / 12;

console.log(litros.toFixed(3));