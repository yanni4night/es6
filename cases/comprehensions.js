/**
  * Copyright (C) 2014 yanni4night.com
  * comprehensions.js
  *
  * changelog
  * 2014-12-18[16:05:01]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
"use strict";

var assert = require("assert");


var customers = ["Beijing", "DC", "Seattle"];

// Array comprehensions
var results = [
  for(c of customers)
    if (c.city == "Seattle")
      { name: c.name, age: c.age }
]

// Generator comprehensions
var results = (
  for(c of customers)
    if (c.city == "Seattle")
      { name: c.name, age: c.age }
)