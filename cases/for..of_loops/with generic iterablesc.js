
var result = "";
var iterable = __createIterableObject(1, 2, 3);
for (var item of iterable) {
  result += item;
}
return result === "123";
      