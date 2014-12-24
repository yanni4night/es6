
function foo(){};
return foo.name === 'foo' &&
  (function(){}).name === '';
      