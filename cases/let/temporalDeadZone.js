/**
 * Copyright (C) 2014 yanni4night.com
 * temporalDeadZone.js
 *
 * changelog
 * 2014-12-24[14:15:54]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
var assert = require("assert");

assert.throws(function() {
        qux;
}, 'temporal dead zone');

let qux = 456;