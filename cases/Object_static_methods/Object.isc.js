
return typeof Object.is === 'function' &&
  Object.is(NaN, NaN) &&
 !Object.is(-0, 0);
      