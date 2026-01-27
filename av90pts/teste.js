var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var c = parseInt(lines.shift());

const notas = [
    { nota: a, peso: 2.0 }, 
    { nota: b, peso: 3.0 },
    { nota: c, peso: 5.0 }
];
const somaNotascomPeso = notas.reduce((acc, curr) => acc + (curr.nota * curr.peso), 0);

const somaPesos = notas.reduce((acc, curr) => acc + curr.peso, 0);
const mediaFinal = somaNotascomPeso / somaPesos;
console.log("MEDIA =", mediaFinal.toFixed(1));
