var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [A, B, C] = lines[0].split(' ').map(item => parseFloat(item));
 
var delta = Math.pow(B, 2) - (4 * A * C);

if (A === 0 || delta < 0) {
    console.log("Impossivel calcular");
} else {
    var R1 = (-B + Math.sqrt(delta)) / (2 * A);
    var R2 = (-B - Math.sqrt(delta)) / (2 * A);
    console.log("R1 = " + R1.toFixed(5));
    console.log("R2 = " + R2.toFixed(5));
}