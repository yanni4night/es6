/**
 * Copyright (C) 2014 yanni4night.com
 * enhancedObjectLiterals
 *
 * changelog
 * 2014-12-18[11:48:14]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
"use strict";

var assert = require("assert");

var theProtoObj = {
  toString() {
    return "prototype";
  }
};

function handler() {
  return 2;
}

var obj = {
  // __proto__
  __proto__: theProtoObj,
  // Shorthand for ‘handler: handler’
  handler,
  // Methods
  toString() {
    // Super calls
    return "extends from " + super.toString();
  },
  // Computed (dynamic) property names
  ["prop_" + (() => 42)()]: 42
};

assert.equal("extends from prototype", obj.toString(), "should extends from prototype by __proto__");

assert.equal(2, obj.handler(), "\"handler\" should be defined in short");

assert.equal(42, obj["prop_42"], "property name should be defined dynamically");