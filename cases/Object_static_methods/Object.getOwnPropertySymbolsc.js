
var o = {};
var sym = Symbol();
o[sym] = "foo";
return Object.getOwnPropertySymbols(o)[0] === sym;
      