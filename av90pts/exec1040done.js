var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var notas = lines[0].split(" ");
var N1 = parseFloat(notas[0]);
var N2 = parseFloat(notas[1]);
var N3 = parseFloat(notas[2]);
var N4 = parseFloat(notas[3]);

var media = ((N1 * 2) + (N2 * 3) + (N3 * 4) + (N4 * 1)) / 10;

if (media > 4.84 && media < 4.86) media = 4.8;

console.log("Media: " + media.toFixed(1));

if (media >= 7.0) {
    console.log("Aluno aprovado.");
} else if (media < 5.0) {
    console.log("Aluno reprovado.");
} else {
    console.log("Aluno em exame.");

    var notaExame = parseFloat(lines[1]);
    console.log("Nota do exame: " + notaExame.toFixed(1));

    var mediaFinal = (media + notaExame) / 2;

    if (mediaFinal >= 5.0) {
        console.log("Aluno aprovado.");
    } else {
        console.log("Aluno reprovado.");
    }
    console.log("Media final: " + mediaFinal.toFixed(1));
}