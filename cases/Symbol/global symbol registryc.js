
var symbol = Symbol.for('foo');
return Symbol.for('foo') === symbol &&
   Symbol.keyFor(symbol) === 'foo';
      