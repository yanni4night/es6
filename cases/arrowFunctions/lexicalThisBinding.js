/**
  * Copyright (C) 2014 yanni4night.com
  * lexicalThisBinding.js
  *
  * changelog
  * 2014-12-19[16:34:50]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
var assert = require("assert");

var d = { x : "bar", y : function() { return z => this.x + z; }}.y();
var e = { x : "baz", y : d };
assert.deepEqual(d("ley"), "barley", "lexical \"this\" binding");
assert.deepEqual(e.y("ley"), "barley", "lexical \"this\" binding");