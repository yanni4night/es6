
class C extends Array {}
var c = new C();
return c instanceof Array
  && Array.isPrototypeOf(C)
  && Array.prototype.isPrototypeOf(C.prototype);
      