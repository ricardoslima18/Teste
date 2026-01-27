var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var a = (lines.shift());
var b = parseFloat(lines.shift());
var c = parseFloat(lines.shift())*0.15;

console.log("TOTAL= R$ " + (b + c).toFixed(2));