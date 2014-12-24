
var obj = {};
Reflect.preventExtensions(obj);
return !Object.isExtensible(obj);
      