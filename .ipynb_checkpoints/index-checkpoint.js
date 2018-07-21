var esprima = require('esprima');
var fs = require('fs');

var program = fs.readFileSync('./index.js').toString();

var visualize_byproduct = function(fourd, node){
  fourd.add_vertex({cube: {size: 10, color: 0xffffff}})
};

function iterate(obj, stack, visualize) {
  var current = null;
  for (var property in obj) {
    var previous;
    if (obj.hasOwnProperty(property)) {
      if(current === null){
        current = fourd.add_vertex({cube: {size: 10, color: 0x000000}}); // color and size are equally important, so they're in a dictionary. 
      }
      switch(typeof obj[property]){
        case 'object':
          iterate(obj[property], stack + '.' + property);
          break;
        case 'array':
          iterate(obj[property], stack + '[' + property + ']');
          break;
          
        case 'string':
        case 'number':
          fourd.add_vertex({label: {text: obj[property].toString()}});
          break;
      }
    }
  }
}

          
          
require('fourdsocketproxy')().then(fourd => {
  fourd.clear();

  var stack = [];
  var syntax = esprima.parse(program, [], visualize_byproduct.bind(null, fourd));

  console.dir(syntax);
});
