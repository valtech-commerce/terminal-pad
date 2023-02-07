# @valtech-commerce/terminal-pad

[![npm](https://img.shields.io/npm/v/@valtech-commerce/terminal-pad.svg)](https://www.npmjs.com/package/@valtech-commerce/terminal-pad)
[![npm dependencies](https://david-dm.org/valtech-commerce/terminal-pad/status.svg)](https://david-dm.org/valtech-commerce/terminal-pad)
[![npms](https://badges.npms.io/%40valtech-commerce%2Fterminal-pad.svg)](https://npms.io/search?q=%40valtech-commerce%2Fterminal-pad)
[![Travis CI](https://api.travis-ci.org/valtech-commerce/terminal-pad.svg?branch=main)](https://travis-ci.org/valtech-commerce/terminal-pad/builds)
[![Code style ESLint](https://img.shields.io/badge/code_style-@valtech-commerce/node-659d32.svg)](https://github.com/valtech-commerce/eslint-config-node)

> Terminal-friendly string pad


## Install

```sh
$ npm install @valtech-commerce/terminal-pad
```


## Usage

```js
const chalk = require('chalk');
const pad   = require('@valtech-commerce/terminal-pad');

pad(chalk.bgRed('📛 Error'), 20);
//=> '📛 Error             '

```


## API

### pad(text, length)
Returns a `String` with padded text

#### text
*Required*<br>
Type: `String`

The text to pad.

#### length
*Required*<br>
Type: `Number`

The total length of outputted string.






## License

MIT © [Valtech Canada inc.](https://www.valtech.ca/)
