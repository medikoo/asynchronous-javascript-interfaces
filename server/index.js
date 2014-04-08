'use strict';

var setup  = require('./setup')
  , server = require('./server')

  , env;

try {
	env = require('../env');
} catch (e) {
	if (e.code !== 'MODULE_NOT_FOUND') throw e;
	env = {};
}

setup(env).done(server.bind(null, env));
