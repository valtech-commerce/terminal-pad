# @absolunet/terminal-pad

[![npm](https://img.shields.io/npm/v/@absolunet/terminal-pad.svg)](https://www.npmjs.com/package/@absolunet/terminal-pad)
[![npm dependencies](https://david-dm.org/absolunet/node-terminal-pad/status.svg)](https://david-dm.org/absolunet/node-terminal-pad)
[![npms](https://badges.npms.io/%40absolunet%2Fterminal-pad.svg)](https://npms.io/search?q=%40absolunet%2Fterminal-pad)
[![Travis CI](https://api.travis-ci.org/absolunet/node-terminal-pad.svg?branch=master)](https://travis-ci.org/absolunet/node-terminal-pad/builds)
[![Code style ESLint](https://img.shields.io/badge/code_style-@absolunet/node-659d32.svg)](https://github.com/absolunet/eslint-config-node)

> Terminal-friendly string pad


## Install

```sh
$ npm install @absolunet/terminal-pad
```


## Usage

```js
const chalk = require('chalk');
const pad   = require('@absolunet/terminal-pad');

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

MIT © [Absolunet](https://absolunet.com)
