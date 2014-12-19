/**
  * Copyright (C) 2014 yanni4night.com
  * redefiningAConstIsAnError.js
  *
  * changelog
  * 2014-12-19[17:16:35]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
var assert = require("assert");

const baz = 1;

assert.throws(function(){
    Function("const foo = 1; foo = 2;")()
}, "redefining a const is an error");
