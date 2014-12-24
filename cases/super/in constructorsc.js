
class B extends class {
  constructor(a) { return ["foo" + a]; }
} {
  constructor(a) { return super("bar" + a); }
}
return new B("baz")[0] === "foobarbaz";
      