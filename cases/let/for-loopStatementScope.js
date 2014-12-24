/**
 * Copyright (C) 2014 yanni4night.com
 * for-loopStatementScope.js
 *
 * changelog
 * 2014-12-24[14:13:23]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
var assert = require("assert");

let baz = 1;
for (let baz = 0; false; false) {}

assert.deepEqual(baz, 1, 'for-loop statement scope');