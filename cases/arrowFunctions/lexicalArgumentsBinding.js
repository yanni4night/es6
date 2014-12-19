/**
  * Copyright (C) 2014 yanni4night.com
  * lexicalArgumentsBinding.js
  *
  * changelog
  * 2014-12-19[16:41:30]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
var assert = require("assert");

var f = (function() { return z => arguments[0];}(5));
assert.deepEqual(f(6), 5, "");