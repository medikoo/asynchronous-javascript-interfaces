'use strict';

var hljs = require('highlight.js/lib/highlight');

hljs.registerLanguage('javascript',
	require('highlight.js/lib/languages/javascript'));

hljs.initHighlighting();
