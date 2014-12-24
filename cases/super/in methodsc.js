
class B extends class {
  qux(a) { return "foo" + a; }
} {
  qux(a) { return super.qux("bar" + a); }
}
return new B().qux("baz") === "foobarbaz";
      