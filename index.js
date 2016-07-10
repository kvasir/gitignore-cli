'use strict';
module.exports = function (params, opts) {
	var http = require('https');
	var fs = require('fs');
	var baseUrl = 'https://www.gitignore.io/api/';
	var dest = './.test-gitignore';

	var download = function(url, dest, cb) {
	  var file = fs.createWriteStream(dest);
	  var request = http.get(url, function(response) {
	    response.pipe(file);
	    file.on('finish', function() {
	      file.close(cb);
	    });
	  });
	}

	download(baseUrl + params, dest);
};
