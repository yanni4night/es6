
var iterable = __createIterableObject("b", "c", "d");
return ["a", ...Object.create(iterable), "e"][3] === "d";
      