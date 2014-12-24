
class foo {};
class bar { static name() {} };
return foo.name === "foo" &&
  typeof bar.name === "function";
      