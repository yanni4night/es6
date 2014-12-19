/**
 * Copyright (C) 2014 yanni4night.com
 * index.js
 *
 * changelog
 * 2014-12-18[11:19:09]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
/*jshint node:true*/
"use strict";
var grunt = require('grunt');
var colors = require('colors');
var path = require('path');
/*globals console:true*/
grunt.file.expand('./cases/{,*/}*.js').forEach(function(file) {
    var module = path.basename(file).slice(0, -3).replace(/[A-Z]/g, function(n) {
        return " " + n.toLowerCase();
    });
    try {
        require(file);
        console.log(module.bgGreen.magenta);
    } catch (e) {
        console.log(module.bgRed.white, e.message.red);
    }
});