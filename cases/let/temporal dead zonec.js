
var passed = (function(){ try {  qux; } catch(e) { return true; }}());
let qux = 456;
return passed;
      