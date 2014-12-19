/**
  * Copyright (C) 2014 yanni4night.com
  * noLineBreakBetweenParamsAnd=>.js
  *
  * changelog
  * 2014-12-19[16:45:12]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
var assert = require("assert");

assert.throws(() => {
  try { Function("x\n => 2")(); } catch(e) { return true; }
}, "no line break between params and =>");