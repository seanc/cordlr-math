# cordlr-math [![NPM version](https://badge.fury.io/js/cordlr-math.svg)](https://npmjs.org/package/cordlr-math) [![Build Status](https://travis-ci.org/seanc/cordlr-math.svg?branch=master)](https://travis-ci.org/seanc/cordlr-math)

> Cordlr math plugin

## Installation

```sh
$ npm install --save cordlr-math
```

Then add it to your config.

```js
{
  "plugins": [
    "cordlr-math"
  ],
  "math": {
    "format": "Computed: {{answer}}" // How should the answer be formatted
  }
}
```

## Usage

```
math [options] <equation>
```

It also supports variables, use them like so

```
math -a 1 -b 2 -- a + b
```

`--` is necessary to tell cordlr-math where the equation starts and variable assignment ends.

## License

MIT © [Sean Wilson](https://imsean.me)
