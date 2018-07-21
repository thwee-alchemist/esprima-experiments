
var esprima = require('esprima');
var fs = require('fs');

var SIZE = 1000;

var program = fs.readFileSync('./index.js').toString();

require('fourdsocketproxy')({port: 16100}).then(fourd => {
  
  fourd.vertex = fourd.add_vertex;
  fourd.edge = fourd.add_edge;
  
  var previous, current = fourd.vertex({label: {text: 'root: /'}});
  function traverse(obj) {
    previous = current;
    current = fourd.vertex({cube: {size: SIZE, color: 0x000000}});
    fourd.edge(previous, current);
    
    if(typeof jonObj == "object") {
      for(var key in obj){
        var value = jsobObj[key];
        // key is either an array index or object key
        
        previous = current !== null ? current : foud.vertex({label: {text: '/'}});
        current = fourd.vertex({cube: {size: SIZE, color: 0x000000}});
        fourd.edge(previous, current);
        
        fourd.add_edge(current, traverse(value));
      }
    }
    else if(typeof jsonObj == 'string'){
      for(var i=0; i<jsonObj.length; i++){
        previous = current;
        current = fourd.vertex({label: {text: value}});
        fourd.edge(previous, current);
        
        traverse(jsonObj[i]);
      }
    } else {
      // jsonObj is a number or strin
      previous = current; // the first object is the syntax object.
      current = fourd.vertex({label: {text: value}});
      fourd.edge(previous, current);
    };
    
    return current;
  }
  
  fourd.clear();
  
  var syntax = esprima.parse(program, {}, traverse);
});