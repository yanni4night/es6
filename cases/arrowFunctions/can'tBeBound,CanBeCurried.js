/**
  * Copyright (C) 2014 yanni4night.com
  * can'tBeBound,CanBeCurried.js
  *
  * changelog
  * 2014-12-19[16:39:32]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
"use strict";
var assert = require("assert");

var d = { x : "bar", y : function() { return z => this.x + z; }};
var e = { x : "baz" };
assert.deepEqual(d.y().bind(e, "ley")() , "barley", "can't be bound, can be curried");