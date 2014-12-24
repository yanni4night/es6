
var methods = ['freeze', 'seal', 'preventExtensions', 'getOwnPropertyDescriptor',
  'getPrototypeOf', 'isExtensible', 'isSealed', 'isFrozen', 'keys', 'getOwnPropertyNames'];
for (var i = 0; i < methods.length; i++) {
  Object[methods[i]](20000, "foo");
  Object[methods[i]]("foo", "foo");
  Object[methods[i]](false, "foo");
}
return true;
      