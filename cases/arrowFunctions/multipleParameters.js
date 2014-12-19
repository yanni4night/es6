/**
 * Copyright (C) 2014 yanni4night.com
 * multipleParameters.js
 *
 * changelog
 * 2014-12-19[16:33:04]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
var assert = require("assert");

var c = (v, w, x, y, z) => "" + v + w + x + y + z;
assert.deepEqual(c(6, 5, 4, 3, 2), "65432", "multiple parameters");