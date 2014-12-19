/**
  * Copyright (C) 2014 yanni4night.com
  * thisUnchangedByCallOrApply.js
  *
  * changelog
  * 2014-12-19[16:37:56]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
var assert = require("assert");

var d = { x : "foo", y : function() { return () => this.x; }};
var e = { x : "bar" };
assert.ok(d.y().call(e) === "foo" && d.y().apply(e) === "foo", "\"this\" unchanged by call or apply");