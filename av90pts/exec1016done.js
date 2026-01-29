var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var distancia = parseInt(input);

var tempo = distancia * 2;

console.log(tempo + " minutos");