
var symbol = Symbol();
var symbolObject = Object(symbol);

return typeof symbolObject === "object" &&
  symbolObject == symbol &&
  symbolObject.valueOf() === symbol;
      