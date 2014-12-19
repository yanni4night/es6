/**
 * Copyright (C) 2014 yanni4night.com
 * 1Parameter,noBrackets.js
 *
 * changelog
 * 2014-12-19[16:31:13]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
"use strict";
var assert = require("assert");

var b = x => x + "foo";
assert.deepEqual(b("fee fie foe "), "fee fie foe foo", "1 parameter,no brackets");