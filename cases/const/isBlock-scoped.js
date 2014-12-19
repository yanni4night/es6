/**
  * Copyright (C) 2014 yanni4night.com
  * isBlock-scoped.js
  *
  * changelog
  * 2014-12-19[17:15:10]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
var assert = require("assert");

const bar = 123;
{ const bar = 456; }

assert.deepEqual(bar, 123, "is block-scoped");