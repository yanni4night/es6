/**
  * Copyright (C) 2014 yanni4night.com
  * defaultRestSpread.js
  *
  * changelog
  * 2014-12-18[15:09:08]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
"use strict";

var assert = require("assert");

function f(x, y = 12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}

assert.deepEqual(f(3), 15, "default parameter");

function f(x, ...y) {
  // y is an Array
  return x * y.length;
}

assert.deepEqual(f(3, "hello", true), 6, "array parameter");

function f(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument
assert.deepEqual(f(...[1,2,3]), 6, "each element of array as argument");
