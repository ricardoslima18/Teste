var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [h1, m1, h2, m2] = lines[0].trim().split(" ").map(Number);

let instantesInicio = h1 * 60 + m1;
let instantesFinal = h2 * 60 + m2;

let duracaoTotalMinutos;

if (instantesInicio < instantesFinal) {
 duracaoTotalMinutos = instantesFinal - instantesInicio;
} else {
    duracaoTotalMinutos = (24 * 60 - instantesInicio) + instantesFinal;
}
let duracaoHoras = Math.floor(duracaoTotalMinutos / 60);
let duracaoMinutos = duracaoTotalMinutos % 60;
console.log("O JOGO DUROU " + duracaoHoras + " HORA(S) E " + duracaoMinutos + " MINUTO(S)");
