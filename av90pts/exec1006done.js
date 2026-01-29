var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());
var c = parseFloat(lines.shift());
 
nota1 = a*2.0;
nota2 = b*3.0;
nota3 = c*5.0;
media = (nota1 + nota2 + nota3) / 10;
console.log("MEDIA =", media.toFixed(1));