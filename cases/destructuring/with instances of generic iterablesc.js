
var iterable = __createIterableObject(1, 2, 3);
var [a, b, c] = Object.create(iterable);
return a === 1 && b === 2 && c === 3;
      