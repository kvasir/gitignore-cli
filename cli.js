#!/usr/bin/env node
'use strict';
var meow = require('meow');
var gitignoreCli = require('./');

var cli = meow([
	'Usage',
	'  $ gitignore-cli [params]',
	'',
	'Options',
	'  ',
	'',
	'Examples',
	'  $ gitignore-cli java',
	'  for one parameter',
	'  $ gitignore-cli java node',
	'  for > 1 parameter'
]);

gitignoreCli(cli.input);
