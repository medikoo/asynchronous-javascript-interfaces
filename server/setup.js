'use strict';

var count    = require('es5-ext/object/count')
  , deferred = require('deferred')
  , resolve  = require('path').resolve
  , webmake  = require('webmake')

  , clientProgram = resolve(__dirname, '../client/index.js')
  , clientBundle = resolve(__dirname, '../public/main.js');

module.exports = function (env) {
	var promise;
	if (env.dev) return deferred(null);
	return (promise = webmake(clientProgram, { output: clientBundle })
		.aside(function () {
			console.log("Webmake OK [" + promise.parser.modulesFiles.length +
				" modules from " + count(promise.parser.packages) + " packages in " +
				(promise.time / 1000).toFixed(2) + "s]");
		}));
};
