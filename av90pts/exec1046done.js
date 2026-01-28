var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [inicio, fim] = lines[0].trim().split(" ").map(Number);
var duracao;
if (inicio < fim) {
    duracao = fim - inicio;
} else {
    duracao = 24 - inicio + fim;
}
console.log("O JOGO DUROU " + duracao + " HORA(S)");