
return (function (foo, ...args) {
  return args instanceof Array && args + "" === "bar,baz";
}("foo", "bar", "baz"));
      