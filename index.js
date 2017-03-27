//--------------------------------------------------------
//-- Terminal pad
//--------------------------------------------------------
'use strict';

const stringWidth = require('string-width');


module.exports = (text, length) => {
	const lines = [];
	text.split('\n').forEach((line) => {
		lines.push(line + ' '.repeat(length - stringWidth(line)));
	});

	return lines.join('\n');
};
