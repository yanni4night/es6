
var desc = Object.getOwnPropertyDescriptor(Object.prototype,"__proto__");
var A = function(){};

return (desc
  && "get" in desc
  && "set" in desc
  && desc.configurable
  && !desc.enumerable);
      