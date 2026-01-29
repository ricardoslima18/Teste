var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var linhas = input.trim().split('\n');

var raio = parseFloat(linhas[0]);
var pi = 3.14159;

var volume = (4.0 / 3) * pi * Math.pow(raio, 3);

console.log("VOLUME = " + volume.toFixed(3));