'use strict';

var Highlight = require('highlight.js/lib/highlight')
  , hljs = new Highlight();

hljs.registerLanguage('javascript',
	require('highlight.js/lib/languages/javascript'));

hljs.initHighlighting();
