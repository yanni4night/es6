/**
  * Copyright (C) 2014 yanni4night.com
  * temporalDeadZoneInStrictMode.js
  *
  * changelog
  * 2014-12-19[17:25:47]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
"use strict";
var assert = require("assert");

assert.throws(function() {
        qux;
}, "temporal dead zone");
const qux = 456;