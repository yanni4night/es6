
var obj = { foo: 1, bar: 2 };
return Reflect.ownKeys(obj) + "" === "foo,bar";
      