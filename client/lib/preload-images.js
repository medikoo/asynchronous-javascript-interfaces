'use strict';

var forEach = Array.prototype.forEach;

forEach.call(document.styleSheets, function (sheet) {
	if (!sheet.rules) return;
	forEach.call(sheet.rules, function (rule) {
		var matches, image;
		if (rule.style && rule.style.backgroundImage) {
			matches = rule.style.backgroundImage.match(/url\(([\0-(\*-\uffff]*)\)/);
			if (matches) {
				image = new Image();
				image.src = matches[1];
			}
		}
	});
});
