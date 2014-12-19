/**
  * Copyright (C) 2014 yanni4night.com
  * isBlock-scopedInStrictMode.js
  *
  * changelog
  * 2014-12-19[17:24:30]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
"use strict";
var assert = require("assert");

const bar = 123;
{ const bar = 456; }

assert.deepEqual(bar, 123, "is block-scoped");