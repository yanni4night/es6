
class C {
  static method() { return 3; }
}
return typeof C.method === "function"
  && C.method() === 3;
      