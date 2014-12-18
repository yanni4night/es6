/**
  * Copyright (C) 2014 yanni4night.com
  * destructuring.js
  *
  * changelog
  * 2014-12-18[12:26:09]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
"use strict";

var assert = require("assert");

// list matching
var [a, , b] = [1, 2, 3];

assert(a, 2, "list should match one by one");
assert(b, 3, "list should match one by one");

var getASTNode = function(){
    return {a: 1, b: 2, c: 3};
};

// object matching
var { op: a, lhs: { op: b }, rhs: c }
       = getASTNode();

assert.deepEqual(1, op, "object matching");
assert.deepEqual(2, lhs&&lhs.op, "object matching");
assert.deepEqual(3, rhs, "object matching");

// object matching shorthand
// binds `op`, `lhs` and `rhs` in scope
var {op, lhs, rhs} = getASTNode();

assert.deepEqual(1, op, "object matching shorthand");
assert.deepEqual(2, lhs, "object matching shorthand");
assert.deepEqual(3, rhs, "object matching shorthand");

// Can be used in parameter position
function g({name: x}) {
  return x;
}
assert.deepEqual(5, g({name: 5}), "destructuring in parameter position");

// Fail-soft destructuring
var [a] = [];
assert.deepEqual(a, undefined, "fail-soft destructuring");

// Fail-soft destructuring with defaults
var [a = 1] = [];
assert.deepEqual(a, 1, "fail-soft destructuring with defaults");