# Px
Extension functions for JS Promise

## Introduction

Px allows the extension of the native Promise objects by adding additional functions to its prototype.
Px also introduces two Promise variants: 
* DeferredPromise which is a Promise that, unlike a vanilla Promise, does not call the executor passed to its constructor synchronously but calls it whenever a callback is attached to it (so it produces a different Promise objects every call) 
* PublishedPromise, which allows asynchronous fulfillment.

## Build
First, run install the dependencies:
```
npm install
```

Run the test suite
```
npm test
```

You can also try generating the docs
```
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
