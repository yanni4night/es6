/**
  * Copyright (C) 2014 yanni4night.com
  * noPrototypeProperty.js
  *
  * changelog
  * 2014-12-19[16:47:52]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
var assert = require("assert");

var a = () => 5;
assert.ok(!a.hasOwnProperty("prototype"), "no \"prototype\" property");