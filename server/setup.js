'use strict';

var deferred = require('deferred')
  , resolve  = require('path').resolve
  , webmake  = require('webmake')

  , clientProgram = resolve(__dirname, '../client/index.js')
  , clientBundle = resolve(__dirname, '../public/main.js');

module.exports = function (env) {
	if (env.dev) return deferred(null);
	return webmake(clientProgram, { output: clientBundle });
};
