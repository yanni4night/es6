
var object = {};
var symbol = Symbol();
object[symbol] = 1;

for (var x in object){}
var passed = (x !== symbol);

if (Object.keys && Object.getOwnPropertyNames) {
  passed &= Object.keys(object).length === 0
    && Object.getOwnPropertyNames(object).length === 0;
}

return passed;
      