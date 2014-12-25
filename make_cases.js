/**
 * Copyright (C) 2014 yanni4night.com
 * make_cases.js
 *
 * changelog
 * 2014-12-24[14:51:10]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
"use strict";
var grunt = require('grunt');
/*var map={};jQuery('tr[data-parent]').each(function(idx,item){var key = $(item).attr('data-parent');var exs = map[key]=map[key]||{};var ex = $(item).find('td:eq(0)').text();exs[ex]=$(item).find('script[data-source]').attr('data-source')});JSON.stringify(map);*/

var es6Defination = grunt.file.readJSON('./es6.json');

for (let feature in es6Defination) {
    for (let ex in es6Defination[feature]) {
        let source = es6Defination[feature][ex];
        grunt.file.write('./cases/' + feature + '/' + ex + '.js', source);
    }
}