
return RegExp[Symbol.species] === RegExp
  && Array[Symbol.species] === Array
  && !(Symbol.species in Object);
      