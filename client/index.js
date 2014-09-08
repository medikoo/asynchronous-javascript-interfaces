'use strict';

Error.stackTraceLimit = Infinity;

var env, root, plugins, bespoke;

try {
	env = require('../env');
} catch (e) {
	if (e.code !== 'MODULE_NOT_FOUND') throw e;
	env = {};
}
root = env.root || '/';

// Inject slides
document.body.appendChild(document.createElement('article')).innerHTML
	= require('../slides')
		.replace(/ src="\/(?!\/)/g, ' src="' + root);

// Syntax highlight
require('./lib/highlight');

// Bespoke engine + necessary plugins
bespoke = require('bespoke');
plugins = [
	require('bespoke-classes')(),
	require('bespoke-history')(env.root || true),
	require('bespoke-keys')(),
	require('bespoke-notes')(),
	require('bespoke-progress')(),
	require('bespoke-substeps')(),
	require('bespoke-scale')(),
	require('bespoke-touch')()
];

if (env.sync) {
	plugins.push(require('bespoke-sync/client')({ log: true, ssePath: root + 'sse-slides/',
		xhrPath: root + 'slide/' }));
}

// Intialize slides engine
window.deck = bespoke.from('article', plugins);

// Preload images
require('./lib/preload-images');
