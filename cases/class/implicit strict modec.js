
var c = class C {
  static method() { return this === undefined; }
}.method;

return c();
      