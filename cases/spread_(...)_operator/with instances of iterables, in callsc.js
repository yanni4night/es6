
var iterable = __createIterableObject(1, 2, 3);
return Math.max(...Object.create(iterable)) === 3;
      