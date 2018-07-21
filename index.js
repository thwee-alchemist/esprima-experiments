var esprima = require('esprima');
var fs = require('fs');
var program = fs.readFileSync('./index.js').toString();
var syntax = esprima.parse("var answer = 42;");
console.log(syntax);

