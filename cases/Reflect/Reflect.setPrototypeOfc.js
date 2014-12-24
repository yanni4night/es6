
var obj = {};
Reflect.setPrototypeOf(obj, Array.prototype);
return obj instanceof Array;
      