/**
 * Copyright (C) 2014 yanni4night.com
 * iteratorsFor-of.js
 *
 * changelog
 * 2014-12-18[15:29:54]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
"use strict";

var assert = require("assert");

var data = ["Jan", "Feb", "Mar"];

var result = [];

for (var n of data) {
    result.push(n);
}

assert.deepEqual(3, result.length, "");
assert.deepEqual("Mar", result[2], "");