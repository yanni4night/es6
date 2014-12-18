/**
  * Copyright (C) 2014 yanni4night.com
  * generators.js
  *
  * changelog
  * 2014-12-18[16:02:38]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
"use strict";

var assert = require("assert");

var fibonacci = {
  [Symbol.iterator]: function*() {
    var pre = 0, cur = 1;
    for (;;) {
      var temp = pre;
      pre = cur;
      cur += temp;
      yield cur;
    }
  }
}

var result = [];

for (var n of fibonacci) {
  // truncate the sequence at 1000
    if (n > 1000)
        break;
    result.push(n);
}

assert.deepEqual(1e3, result.length, "");