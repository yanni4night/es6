
return class foo {}.name === "foo" &&
  typeof class bar { static name() {} }.name === "function";
      