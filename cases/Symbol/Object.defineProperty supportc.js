
var object = {};
var symbol = Symbol();
var value = {};

if (Object.defineProperty) {
  Object.defineProperty(object, symbol, { value: value });
  return object[symbol] === value;
}

return passed;
      