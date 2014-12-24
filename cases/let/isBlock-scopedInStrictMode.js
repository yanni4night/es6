/**
 * Copyright (C) 2014 yanni4night.com
 * isBlock-scoped.js
 *
 * changelog
 * 2014-12-24[14:11:54]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
"use strict";
var assert = require("assert");

let bar = 123; {
    let bar = 456;
}

assert.deepEqual(bar, 123, 'is block-scoped');