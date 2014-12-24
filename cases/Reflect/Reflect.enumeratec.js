
var obj = { foo: 1, bar: 2 };
var iterator = Reflect.enumerate(obj);

var item = iterator.next();
var passed = item.value === "foo" && item.done === false;
item = iterator.next();
passed    &= item.value === "bar" && item.done === false;
item = iterator.next();
passed    &= item.value === undefined && item.done === true;
return passed;
      