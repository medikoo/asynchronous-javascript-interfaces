'use strict';

Error.stackTraceLimit = Infinity;

var env, options;

try {
	env = require('../env');
} catch (e) {
	if (e.code !== 'MODULE_NOT_FOUND') throw e;
	env = {};
}

// Inject slides
document.body.appendChild(document.createElement('article')).innerHTML
	= require('../slides')
		.replace(/ src="\/(?!\/)/g, ' src="' + (env.root || '/'));

// Syntax highlight
require('./lib/highlight');

// Bespoke engine + necessary plugins
require('bespoke');
bespoke.plugins.history = require('bespoke-history');
require('bespoke-keys');
bespoke.plugins.notes = require('bespoke-notes');
require('bespoke-progress');
bespoke.plugins.substeps = require('bespoke-substeps');
require('bespoke-touch');

options = {
	history: env.root || true,
	keys: true,
	notes: true,
	progress: true,
	substeps: true,
	touch: true
};

if (env.sync) {
	bespoke.plugins.sync = require('bespoke-sync/client');
	options.sync = { log: true };
}

// Intialize slides engine
window.deck = bespoke.from('article', options);

// Preload images
require('./lib/preload-images');
