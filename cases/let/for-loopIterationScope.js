/**
  * Copyright (C) 2014 yanni4night.com
  * for-loopIterationScope.js
  *
  * changelog
  * 2014-12-24[14:18:23]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
var assert = require("assert");

let scopes = [];
for(let i = 0; i < 2; i++) {
  scopes.push(function(){ return i; });
}


assert.deepEqual(scopes[0](), 0 , "for-loop iteration scope");
assert.deepEqual(scopes[1](), 1 , "for-loop iteration scope");

scopes = [];
for(let i in { a:1, b:1 }) {
  scopes.push(function(){ return i; });
}
assert.deepEqual(scopes[0](), "a" ,"for-loop iteration scope");
assert.deepEqual(scopes[1](), "b" ,"for-loop iteration scope");