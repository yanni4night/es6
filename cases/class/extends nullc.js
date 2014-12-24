
class C extends null {}
var c = new C();
return !(c instanceof Object)
  && Function.prototype.isPrototypeOf(C)
  && Object.getPrototypeOf(C.prototype) === null;
      