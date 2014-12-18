/**
 * Copyright (C) 2014 yanni4night.com
 * arrows.js
 *
 * changelog
 * 2014-12-18[11:23:54]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
"use strict";

var assert = require("assert");

var Foo = {
    famous: ["YaoMing", "ChengLong", "LiBingbing"],
    reserve() {
        //arrow
        this.famous.forEach((n, idx) => {
            //share the same lexical "this"
            this.famous[idx] = n.split("").reverse().join("");
        });
    }
};

Foo.reserve();

assert.equal(Foo.famous[0], "gniMoaY", "letters should be reserved");