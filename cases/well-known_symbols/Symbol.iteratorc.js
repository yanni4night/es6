
var a = 0, b = {};
b[Symbol.iterator] = function() {
  return {
    next: function() {
      return {
        done: a++ === 1,
        value: "foo"
      };
    }
  };
};
var c;
for (c of b) {}
return c === "foo";
      