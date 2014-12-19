/**
 * Copyright (C) 2014 yanni4night.com
 * properTailCalls.js
 *
 * changelog
 * 2014-12-19[16:18:55]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
"use strict";
var assert = require("assert");

assert.deepEqual((function f(n) {
    if (n <= 0) {
        return "foo";
    }
    return f(n - 1);
}(1e6)), "foo", "tail call optimisation");