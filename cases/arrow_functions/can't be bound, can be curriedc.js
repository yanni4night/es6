
var d = { x : "bar", y : function() { return z => this.x + z; }};
var e = { x : "baz" };
return d.y().bind(e, "ley")() === "barley";
      