/**
  * Copyright (C) 2014 yanni4night.com
  * letConst.js
  *
  * changelog
  * 2014-12-18[15:13:52]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
"use strict";

var assert = require("assert");

const me = "yanni";

assert.throws(function(){
    eval('me = "nightinagle"');
}, "assignment to const");

{
    let your = "kate";
}

assert.deepEqual("undefined", typeof your, "let make a block-scoped variable");