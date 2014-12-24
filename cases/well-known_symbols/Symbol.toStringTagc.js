
var a = {};
a[Symbol.toStringTag] = "foo";
return (a + "") === "[object foo]";
      