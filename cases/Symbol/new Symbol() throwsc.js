
var symbol = Symbol();
try {
  new Symbol();
} catch(e) {
  return true;
}
      