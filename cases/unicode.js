/**
  * Copyright (C) 2014 yanni4night.com
  * unicode.js
  *
  * changelog
  * 2014-12-18[16:07:30]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
"use strict";

var assert = require("assert");

var w = "𠮷";

// same as ES5.1
assert.deepEqual(w.length, 2, "");

// new RegExp behaviour, opt-in ‘u’
assert.deepEqual(w.match(/./u)[0].length, 2, "");

// new form
assert.equal("\u{20BB7}", "𠮷", "");
assert.equal("\uD842\uDFB7", "𠮷", "");

// new String ops
assert.deepEqual("𠮷".codePointAt(0), 0x20BB7, "");

// for-of iterates code points
for(var c of w) {
  console.log(c);
}