
var obj = {};
Reflect.defineProperty(obj, "foo", { value: 123 });
return obj.foo === 123;
      