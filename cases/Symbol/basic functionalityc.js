
var object = {};
var symbol = Symbol();
var value = {};
object[symbol] = value;
return object[symbol] === value;
      