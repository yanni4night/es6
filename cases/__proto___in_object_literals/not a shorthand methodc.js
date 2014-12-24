
if (!({ __proto__ : [] } instanceof Array)) {
  return false;
}
return !({ __proto__(){} } instanceof Function);
      