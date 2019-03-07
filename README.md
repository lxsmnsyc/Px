# Px

Extension functions for JS Promise

[![https://nodei.co/npm/promise-ex.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/promise-ex.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/promise-ex)

[![JSDeliver Hits](https://data.jsdelivr.com/v1/package/npm/promise-ex/badge)](https://www.jsdelivr.com/package/npm/promise-ex)
[![Build Status](https://travis-ci.org/LXSMNSYC/Px.svg?branch=master)](https://travis-ci.org/LXSMNSYC/Px)
[![codecov](https://codecov.io/gh/LXSMNSYC/Px/branch/master/graph/badge.svg)](https://codecov.io/gh/LXSMNSYC/Px)
[![HitCount](http://hits.dwyl.io/lxsmnsyc/Px.svg)](http://hits.dwyl.io/lxsmnsyc/Px)

[![devDependencies Status](https://david-dm.org/lxsmnsyc/px/dev-status.svg)](https://david-dm.org/lxsmnsyc/px?type=dev)
[![Inline docs](http://inch-ci.org/github/lxsmnsyc/px.svg?branch=master)](http://inch-ci.org/github/lxsmnsyc/px)

## Introduction

Px allows the extension of the native Promise objects by adding additional functions to its prototype.
Px also introduces two Promise variants:

* DeferredPromise which is a Promise that, unlike a vanilla Promise, does not call the executor passed to its constructor synchronously but calls it whenever a callback is attached to it (so it produces a different Promise objects every call).
  
* PublishedPromise, which allows asynchronous fulfillment.

## Install

NPM

```bash
npm i promise-ex
```

then in NodeJs:

```js
let Px = require('promise-ex');
```

CDN

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/promise-ex@0.3.7/index.min.js"></script>
```

## Example

Working example can be found at [RunKit](https://runkit.com/lxsmnsyc/5c7f46ce7310350012d0860c).

## Changelogs

* 0.3.6
  * Fixed delayedReject only resolving.
* 0.3.5
  * AirBnb style
* 0.3.0
  * Promise.test
  * Fix on comments
  * Fixed DeferredPromise.delay only resolving
* 0.2.0
  * Delayed Resolve and Reject
* 0.1.0
  * Initial Release

## Build

First, run install the dependencies:

```bash
npm install
```

Run the test suite

```bash
npm test
```

You can also try generating the docs

```bash
npm run generate-docs
```

## License

MIT License

Copyright (c) 2019 Alexis Munsayac

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
