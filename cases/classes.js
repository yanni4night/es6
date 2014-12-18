/**
 * Copyright (C) 2014 yanni4night.com
 * classes.js
 *
 * changelog
 * 2014-12-18[11:41:45]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
"use strict";

var assert = require("assert");

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Bird extends Animal {
    constructor(name, canflay) {
        super(name)
        this.canflay = canflay;
    }
    fly() {
        if (canflay) {
            return "fly";
        }
    }
}

var bird = new Bird('nightingale', true);

assert("fly", bird.fly(), "shoule return \"fly\"")