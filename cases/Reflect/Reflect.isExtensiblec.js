
return Reflect.isExtensible({}) &&
  !Reflect.isExtensible(Object.preventExtensions({}));
      