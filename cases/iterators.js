/**
  * Copyright (C) 2014 yanni4night.com
  * iterators.js
  *
  * changelog
  * 2014-12-18[15:59:22]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
"use strict";

var assert = require("assert");

var fibonacci = {
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { done: false, value: cur }
      }
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

assert.deepEqual(1000, result.length, "");
