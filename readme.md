# @absolunet/terminal-pad

[![NPM version](https://img.shields.io/npm/v/@absolunet/terminal-pad.svg)](https://www.npmjs.com/package/@absolunet/terminal-pad)
[![Travis build](https://api.travis-ci.org/absolunet/node-terminal-pad.svg?branch=master)](https://travis-ci.org/absolunet/node-terminal-pad/builds)
[![Dependencies](https://david-dm.org/absolunet/node-terminal-pad/status.svg)](https://david-dm.org/absolunet/node-terminal-pad)
[![Dev dependencies](https://david-dm.org/absolunet/node-terminal-pad/dev-status.svg)](https://david-dm.org/absolunet/node-terminal-pad?type=dev)

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

Returns an `string` with padded `text`

#### text

*Required*  
Type: `string`  

The text to pad.

#### length

*Required*  
Type: `number`  

The total length of outputted string.



## License

MIT © [Absolunet](https://absolunet.com)
