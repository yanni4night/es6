
var qux = "corge";
var { [qux]: grault } = { corge: "garply" };
return grault === "garply";
      