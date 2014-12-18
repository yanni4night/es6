/**
  * Copyright (C) 2014 yanni4night.com
  * templateStrings.js
  *
  * changelog
  * 2014-12-18[12:03:57]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
"use strict";

var assert = require("assert");

// Basic literal string creation
`In JavaScript '\n' is a line-feed.`

// Multiline strings
`In JavaScript this is
 not legal.`

// Construct a DOM query
var name = "Bob", time = "today";
var finalStr = `Hello ${name}, how are you ${time}?`

assert.ok(!!~finalStr.indexOf("Bob"), "injection should work");