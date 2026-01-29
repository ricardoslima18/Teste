var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var segundos = parseInt(input );

let horas = Math.floor(segundos/3600);
let resto = segundos % 3600;

let minutos = Math.floor(resto /60);

let segundosrestantes = resto % 60;

console.log(`${horas}:${minutos}:${segundosrestantes}`);
