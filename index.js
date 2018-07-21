var esprima = require('esprima');
var fs = require('fs');
var program = fs.readFileSync('./index.js').toString();
var syntax = esprima.parse(program);
console.log(syntax);

