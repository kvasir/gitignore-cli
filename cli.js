#!/usr/bin/env node
'use strict';
var meow = require('meow');
var gitignoreCli = require('./');

var cli = meow([
	'Usage',
	'  $ gitignore-cli [input]',
	'',
	'Options',
	'  --foo  Lorem ipsum. [Default: false]',
	'',
	'Examples',
	'  $ gitignore-cli',
	'  unicorns & rainbows',
	'  $ gitignore-cli ponies',
	'  ponies & rainbows'
]);

console.log(gitignoreCli(cli.input[0] || 'unicorns'));
