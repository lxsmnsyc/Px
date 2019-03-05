# Px
Extension functions for JS Promise
### Table of Contents

-   [DeferredPromise][1]
    -   [Parameters][2]
    -   [then][3]
        -   [Parameters][4]
    -   [catch][5]
        -   [Parameters][6]
    -   [finally][7]
        -   [Parameters][8]
    -   [retry][9]
        -   [Parameters][10]
        -   [Examples][11]
    -   [delay][12]
        -   [Parameters][13]
        -   [Examples][14]
    -   [toPromise][15]
    -   [resolve][16]
        -   [Parameters][17]
    -   [reject][18]
        -   [Parameters][19]
-   [DeferredPromise][20]
    -   [Parameters][21]
    -   [then][22]
        -   [Parameters][23]
    -   [catch][24]
        -   [Parameters][25]
    -   [finally][26]
        -   [Parameters][27]
    -   [retry][28]
        -   [Parameters][29]
        -   [Examples][30]
    -   [delay][31]
        -   [Parameters][32]
        -   [Examples][33]
    -   [toPromise][34]
    -   [resolve][35]
        -   [Parameters][36]
    -   [reject][37]
        -   [Parameters][38]
-   [PromiseExecutor][39]
    -   [Parameters][40]
-   [OnReject][41]
    -   [Parameters][42]
-   [onFinally][43]
-   [RetryTester][44]
    -   [Parameters][45]
-   [ContainsTester][46]
    -   [Parameters][47]
-   [CompareTester][48]
    -   [Parameters][49]
-   [OnResolve][50]
    -   [Parameters][51]
-   [PublishedPromise][52]
    -   [Parameters][53]
    -   [resolve][54]
        -   [Parameters][55]
    -   [reject][56]
        -   [Parameters][57]
    -   [then][58]
        -   [Parameters][59]
    -   [catch][60]
        -   [Parameters][61]
    -   [finally][62]
        -   [Parameters][63]
    -   [toPromise][64]
-   [Promise][65]
-   [external:Promise#contains][66]
    -   [Parameters][67]
    -   [Examples][68]
-   [external:Promise#delay][69]
    -   [Parameters][70]
    -   [Examples][71]
-   [external:Promise.compare][72]
    -   [Parameters][73]
    -   [Examples][74]
-   [external:Promise.equals][75]
    -   [Parameters][76]
    -   [Examples][77]
-   [external:Promise.deferred][78]
    -   [Parameters][79]
    -   [Examples][80]
-   [external:Promise#defer][81]
    -   [Examples][82]
-   [external:Promise.publish][83]
    -   [Parameters][84]
    -   [Examples][85]
-   [external:Promise.timer][86]
    -   [Parameters][87]
    -   [Examples][88]
-   [external:Promise#timeout][89]
    -   [Parameters][90]
    -   [Examples][91]

## DeferredPromise

### Parameters

-   `fn`  

**Meta**

-   **copyright**: Alexis Munsayac 2019

-   **author**: Alexis Munsayac &lt;alexis.munsayac@gmail.com>
-   **license**: MIT
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

### then

Attaches callbacks to the PublishedPromise

#### Parameters

-   `res` **[OnResolve][92]** onResolve function
-   `rej` **[OnReject][93]?** onReject function

Returns **[Promise][94]** 

### catch

Catches the rejection value of the PublishedPromise

#### Parameters

-   `rej` **[OnReject][93]** onReject function

Returns **[Promise][94]** 

### finally

Finalize the DeferredPromise

#### Parameters

-   `fin` **[onFinally][95]** 

Returns **[Promise][94]** 

### retry

Retries a rejected DeferredPromise multiple times until a resolved value is fulfilled.

If a function is provided, Retries until the function returns false, in which
will return a rejected Promise with the propagated error.

#### Parameters

-   `fn`  
-   `predicate` **[RetryTester][96]?** a function that returns a boolean

#### Examples

```javascript
Promise.reject(50).defer().retry();
```

Returns **[Promise][94]** 

### delay

Delays the DeferredPromise by a significant amount of time 
before running the executor.

#### Parameters

-   `amount` **[Number][97]** the delay in milliseconds

#### Examples

```javascript
Promise.resolve(50).defer().delay(5000);
```

### toPromise

Creates a Promise version of a DeferredPromise

Returns **[Promise][94]** 

### resolve

Creates a DeferredPromise which resolves the given value.

#### Parameters

-   `value` **any** 

### reject

Creates a DeferredPromise which rejects the given value.

#### Parameters

-   `value` **any** 

## DeferredPromise

### Parameters

-   `fn`  
-   `executor` **[PromiseExecutor][98]** a function that is passed to a Promise constructor.

### then

Attaches callbacks to the PublishedPromise

#### Parameters

-   `res` **[OnResolve][92]** onResolve function
-   `rej` **[OnReject][93]?** onReject function

Returns **[Promise][94]** 

### catch

Catches the rejection value of the PublishedPromise

#### Parameters

-   `rej` **[OnReject][93]** onReject function

Returns **[Promise][94]** 

### finally

Finalize the DeferredPromise

#### Parameters

-   `fin` **[onFinally][95]** 

Returns **[Promise][94]** 

### retry

Retries a rejected DeferredPromise multiple times until a resolved value is fulfilled.

If a function is provided, Retries until the function returns false, in which
will return a rejected Promise with the propagated error.

#### Parameters

-   `fn`  
-   `predicate` **[RetryTester][96]?** a function that returns a boolean

#### Examples

```javascript
Promise.reject(50).defer().retry();
```

Returns **[Promise][94]** 

### delay

Delays the DeferredPromise by a significant amount of time 
before running the executor.

#### Parameters

-   `amount` **[Number][97]** the delay in milliseconds

#### Examples

```javascript
Promise.resolve(50).defer().delay(5000);
```

### toPromise

Creates a Promise version of a DeferredPromise

Returns **[Promise][94]** 

### resolve

Creates a DeferredPromise which resolves the given value.

#### Parameters

-   `value` **any** 

### reject

Creates a DeferredPromise which rejects the given value.

#### Parameters

-   `value` **any** 

## PromiseExecutor

Executor callback for Promises

Type: [Function][99]

### Parameters

-   `resolve` **[Function][99]?** Resolves the Promise with the given value.
-   `reject` **[Function][99]?** Rejects the Promise with the given value.

## OnReject

a callback for rejected values.

Type: [Function][99]

### Parameters

-   `x` **any** the rejected Promise value

## onFinally

a callback that is executed on fulfillment.

Type: [Function][99]

## RetryTester

a callback for testing the amount of retries and the rejection value of the retried DeferredPromise.

Type: [Function][99]

### Parameters

-   `tries` **[Number][97]** the amount of current retries for the DeferredPromise
-   `value` **any** the rejection value

## ContainsTester

a callback that compares the fulfilled value of the Promise against the given value

Type: [Function][99]

### Parameters

-   `fulfilledValue` **any** the fulfilled value of the Promise
-   `sampleValue` **any** the sample value expected from the Promise

## CompareTester

a callback that compares the fulfilled values of the two Promises.

Type: [Function][99]

### Parameters

-   `valueA` **any** the fulfilled value of the first Promise
-   `valueB` **any** the fulfilled value of the second Promise

## OnResolve

a callback for resolved values.

Type: [Function][99]

### Parameters

-   `x` **any** the resolved Promise value

## PublishedPromise

### Parameters

-   `fn`  
-   `executor` **[PromiseExecutor][98]** a function that is passed to a Promise constructor.

### resolve

Resolves the PublishedPromise

#### Parameters

-   `value` **any** 

### reject

Rejects the PublishedPromise

#### Parameters

-   `value` **any** 

### then

Attaches callbacks to the PublishedPromise

#### Parameters

-   `res` **[OnResolve][92]** onResolve function
-   `rej` **[OnReject][93]?** onReject function

Returns **[Promise][94]** 

### catch

Catches the rejection value of the PublishedPromise

#### Parameters

-   `rej` **[OnReject][93]** onReject function

Returns **[Promise][94]** 

### finally

Finalize the PublishedPromise

#### Parameters

-   `fin` **[onFinally][95]** 

Returns **[Promise][94]** 

### toPromise

Creates a Promise version of a PublishedPromise

Returns **[Promise][94]** 

## Promise

-   **See: [https://promisesaplus.com/][100]**
-   **See: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise][101]**

The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

## external:Promise#contains

Tests the resolved value of a Promise and a given value with a given function
and resolves to the function's result.

If the function is not provided, `contains` will perform an equality comparison.

### Parameters

-   `value` **any** the value to be compared with the Promise' resolved value
-   `bipredicate` **[ContainsTester][102]?** a function that compares both the resolved value and the given value.

### Examples

```javascript
Promise.resolve(50).contains(50);
Promise.resolve(50).contains(50, (a, b) => a % b == 0);
```

Returns **[Promise][94]** 

## external:Promise#delay

Delays the fulfillment of a Promise.

### Parameters

-   `amount` **[Number][97]** The amount of time in milliseconds

### Examples

```javascript
Promise.resolve(50).delay(5000);
```

Returns **[Promise][94]** 

## external:Promise.compare

Compares the resolved values of the two Promises.

### Parameters

-   `a` **![Promise][94]** The Promise to be compared with
-   `b` **![Promise][94]** The Promise to be compared with
-   `comparator` **![CompareTester][103]** A function that compares the resolved values of the two Promises

### Examples

```javascript
let a = Promise.resolve(50);
let b = Promise.resolve(25);

Promise.compare(a, b, (x, y) => x%y == 0);
```

Returns **[Promise][94]** 

## external:Promise.equals

Compares the resolved values of the two Promises by equality.

### Parameters

-   `a` **![Promise][94]** The Promise to be compared with
-   `b` **![Promise][94]** The Promise to be compared with

### Examples

```javascript
let a = Promise.resolve(50);
let b = Promise.resolve(25);

Promise.equals(a, b);
```

Returns **[Promise][94]** 

## external:Promise.deferred

Creates a DeferredPromise

### Parameters

-   `the` **[PromiseExecutor][98]** executor function for the DeferredPromise

### Examples

```javascript
Promise.deferred(res => res("Hello World"));
```

Returns **[DeferredPromise][104]** 

## external:Promise#defer

Creates a DeferredPromise whose value depends on the fulfillment of the given Promise.

### Examples

```javascript
Promise.resolve(50).defer().delay(5000);
```

Returns **[Promise][94]** 

## external:Promise.publish

Creates a PublishedPromise which allows asynchronous fulfillment.

### Parameters

-   `the` **[PromiseExecutor][98]** executor function for the PublishedPromise

### Examples

```javascript
let promise = Promise.publish();
promise.then(x => {
    console.log("Resolved: "..x)
})
promise.resolve(50);
```

Returns **[PublishedPromise][105]** 

## external:Promise.timer

Creates a Promise that resolves after a significant amount of time

### Parameters

-   `amount` **[Number][97]** the time in milliseconds.

### Examples

```javascript
await Promise.timer(5000);
```

Returns **[Promise][94]** 

## external:Promise#timeout

Rejects if the given Promise didn't fulfill within a given timeout. Otherwise, it resolves with the given Promise.

### Parameters

-   `amount` **[Number][97]** the time in milliseconds.

### Examples

```javascript
Promise.timer(5000).timeout(2500);
```

Returns **[Promise][94]** 

[1]: #deferredpromise

[2]: #parameters

[3]: #then

[4]: #parameters-1

[5]: #catch

[6]: #parameters-2

[7]: #finally

[8]: #parameters-3

[9]: #retry

[10]: #parameters-4

[11]: #examples

[12]: #delay

[13]: #parameters-5

[14]: #examples-1

[15]: #topromise

[16]: #resolve

[17]: #parameters-6

[18]: #reject

[19]: #parameters-7

[20]: #deferredpromise-1

[21]: #parameters-8

[22]: #then-1

[23]: #parameters-9

[24]: #catch-1

[25]: #parameters-10

[26]: #finally-1

[27]: #parameters-11

[28]: #retry-1

[29]: #parameters-12

[30]: #examples-2

[31]: #delay-1

[32]: #parameters-13

[33]: #examples-3

[34]: #topromise-1

[35]: #resolve-1

[36]: #parameters-14

[37]: #reject-1

[38]: #parameters-15

[39]: #promiseexecutor

[40]: #parameters-16

[41]: #onreject

[42]: #parameters-17

[43]: #onfinally

[44]: #retrytester

[45]: #parameters-18

[46]: #containstester

[47]: #parameters-19

[48]: #comparetester

[49]: #parameters-20

[50]: #onresolve

[51]: #parameters-21

[52]: #publishedpromise

[53]: #parameters-22

[54]: #resolve-2

[55]: #parameters-23

[56]: #reject-2

[57]: #parameters-24

[58]: #then-2

[59]: #parameters-25

[60]: #catch-2

[61]: #parameters-26

[62]: #finally-2

[63]: #parameters-27

[64]: #topromise-2

[65]: #promise

[66]: #externalpromisecontains

[67]: #parameters-28

[68]: #examples-4

[69]: #externalpromisedelay

[70]: #parameters-29

[71]: #examples-5

[72]: #externalpromisecompare

[73]: #parameters-30

[74]: #examples-6

[75]: #externalpromiseequals

[76]: #parameters-31

[77]: #examples-7

[78]: #externalpromisedeferred

[79]: #parameters-32

[80]: #examples-8

[81]: #externalpromisedefer

[82]: #examples-9

[83]: #externalpromisepublish

[84]: #parameters-33

[85]: #examples-10

[86]: #externalpromisetimer

[87]: #parameters-34

[88]: #examples-11

[89]: #externalpromisetimeout

[90]: #parameters-35

[91]: #examples-12

[92]: #onresolve

[93]: #onreject

[94]: #promise

[95]: #onfinally

[96]: #retrytester

[97]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[98]: #promiseexecutor

[99]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[100]: https://promisesaplus.com/

[101]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

[102]: #containstester

[103]: #comparetester

[104]: #deferredpromise

[105]: #publishedpromise