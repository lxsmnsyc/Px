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
-   [Promise][39]
-   [PublishedPromise][40]
    -   [Parameters][41]
    -   [resolve][42]
        -   [Parameters][43]
    -   [reject][44]
        -   [Parameters][45]
    -   [then][46]
        -   [Parameters][47]
    -   [catch][48]
        -   [Parameters][49]
    -   [finally][50]
        -   [Parameters][51]
    -   [contains][52]
        -   [Parameters][53]
        -   [Examples][54]
-   [external:Promise#contains][55]
    -   [Parameters][56]
    -   [Examples][57]
-   [external:Promise#delay][58]
    -   [Parameters][59]
    -   [Examples][60]
-   [external:Promise.compare][61]
    -   [Parameters][62]
    -   [Examples][63]
-   [external:Promise.equals][64]
    -   [Parameters][65]
    -   [Examples][66]
-   [external:Promise.deferred][67]
    -   [Examples][68]
-   [external:Promise#defer][69]
-   [external:Promise.publish][70]
-   [external:Promise.timer][71]
    -   [Parameters][72]

## DeferredPromise

### Parameters

-   `fn`  

### then

Attaches callbacks to the PublishedPromise

#### Parameters

-   `res` **[Function][73]** onResolve function
-   `rej` **[Function][73]?** onReject function

Returns **[Promise][74]** 

### catch

Catches the rejection value of the PublishedPromise

#### Parameters

-   `rej` **[Function][73]** onReject function

Returns **[Promise][74]** 

### finally

Finalize the DeferredPromise

#### Parameters

-   `fin` **[Function][73]** 

Returns **[Promise][74]** 

### retry

Retries a rejected DeferredPromise multiple times until a resolved value is fulfilled.

If a function is provided, Retries until the function returns false, in which
will return a rejected Promise with the propagated error.

#### Parameters

-   `fn`  
-   `predicate` **[Function][73]?** a function that returns a boolean

#### Examples

```javascript
Promise.reject(50).defer().retry();
```

Returns **[Promise][74]** 

### delay

Delays the DeferredPromise by a significant amount of time 
before running the executor.

#### Parameters

-   `amount`  

#### Examples

```javascript
Promise.resolve(50)
```

### toPromise

Creates a Promise version of a DeferredPromise

Returns **[Promise][74]** 

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

### then

Attaches callbacks to the PublishedPromise

#### Parameters

-   `res` **[Function][73]** onResolve function
-   `rej` **[Function][73]?** onReject function

Returns **[Promise][74]** 

### catch

Catches the rejection value of the PublishedPromise

#### Parameters

-   `rej` **[Function][73]** onReject function

Returns **[Promise][74]** 

### finally

Finalize the DeferredPromise

#### Parameters

-   `fin` **[Function][73]** 

Returns **[Promise][74]** 

### retry

Retries a rejected DeferredPromise multiple times until a resolved value is fulfilled.

If a function is provided, Retries until the function returns false, in which
will return a rejected Promise with the propagated error.

#### Parameters

-   `fn`  
-   `predicate` **[Function][73]?** a function that returns a boolean

#### Examples

```javascript
Promise.reject(50).defer().retry();
```

Returns **[Promise][74]** 

### delay

Delays the DeferredPromise by a significant amount of time 
before running the executor.

#### Parameters

-   `amount`  

#### Examples

```javascript
Promise.resolve(50)
```

### toPromise

Creates a Promise version of a DeferredPromise

Returns **[Promise][74]** 

### resolve

Creates a DeferredPromise which resolves the given value.

#### Parameters

-   `value` **any** 

### reject

Creates a DeferredPromise which rejects the given value.

#### Parameters

-   `value` **any** 

## Promise

-   **See: [https://promisesaplus.com/][75]**
-   **See: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise][76]**

The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

## PublishedPromise

### Parameters

-   `fn`  

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

-   `res` **[Function][73]** onResolve function
-   `rej` **[Function][73]?** onReject function

Returns **[Promise][74]** 

### catch

Catches the rejection value of the PublishedPromise

#### Parameters

-   `rej` **[Function][73]** onReject function

Returns **[Promise][74]** 

### finally

Finalize the PublishedPromise

#### Parameters

-   `fin` **[Function][73]** 

Returns **[Promise][74]** 

### contains

Tests the resolved value of a Promise and a given value with a given function
and resolves to the function's result.

If the function is not provided, `contains` will perform an equality comparison.

#### Parameters

-   `value` **any** the value to be compared with the Promise' resolved value
-   `bipredicate` **[Function][73]?** a function that compares both the resolved value and the given value.

#### Examples

```javascript
Promise.resolve(50).contains(50);
Promise.resolve(50).contains(50, (a, b) => a % b == 0);
```

Returns **[Promise][74]** 

## external:Promise#contains

Tests the resolved value of a Promise and a given value with a given function
and resolves to the function's result.

If the function is not provided, `contains` will perform an equality comparison.

### Parameters

-   `value` **any** the value to be compared with the Promise' resolved value
-   `bipredicate` **[Function][73]?** a function that compares both the resolved value and the given value.

### Examples

```javascript
Promise.resolve(50).contains(50);
Promise.resolve(50).contains(50, (a, b) => a % b == 0);
```

Returns **[Promise][74]** 

## external:Promise#delay

Delays the fulfillment of a Promise.

### Parameters

-   `amount` **[Number][77]** The amount of time in milliseconds

### Examples

```javascript
Promise.resolve(50).delay(5000);
```

Returns **[Promise][74]** 

## external:Promise.compare

Compares the resolved values of the two Promises.

### Parameters

-   `a` **![Promise][74]** The Promise to be compared with
-   `b` **![Promise][74]** The Promise to be compared with
-   `comparator` **![Function][73]** A function that compares the resolved values of the two Promises

### Examples

```javascript
let a = Promise.resolve(50);
let b = Promise.resolve(25);

Promise.compare(a, b, (x, y) => x%y == 0);
```

Returns **[Promise][74]** 

## external:Promise.equals

Compares the resolved values of the two Promises by equality.

### Parameters

-   `a` **![Promise][74]** The Promise to be compared with
-   `b` **![Promise][74]** The Promise to be compared with

### Examples

```javascript
let a = Promise.resolve(50);
let b = Promise.resolve(25);

Promise.equals(a, b);
```

Returns **[Promise][74]** 

## external:Promise.deferred

Creates a DeferredPromise

### Examples

```javascript
Promise.deferred(() => Promise.resolve("Success"));
```

Returns **[DeferredPromise][78]** 

## external:Promise#defer

Creates a DeferredPromise whose value depends on the fulfillment of the given Promise.

Returns **[Promise][74]** 

## external:Promise.publish

Creates a PublishedPromise which allows asynchronous fulfillment.

Returns **[PublishedPromise][79]** 

## external:Promise.timer

Creates a Promise that resolves after a significant amount of time

### Parameters

-   `amount` **[Number][77]** the time in milliseconds.

Returns **[Promise][74]** 

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

[39]: #promise

[40]: #publishedpromise

[41]: #parameters-16

[42]: #resolve-2

[43]: #parameters-17

[44]: #reject-2

[45]: #parameters-18

[46]: #then-2

[47]: #parameters-19

[48]: #catch-2

[49]: #parameters-20

[50]: #finally-2

[51]: #parameters-21

[52]: #contains

[53]: #parameters-22

[54]: #examples-4

[55]: #externalpromisecontains

[56]: #parameters-23

[57]: #examples-5

[58]: #externalpromisedelay

[59]: #parameters-24

[60]: #examples-6

[61]: #externalpromisecompare

[62]: #parameters-25

[63]: #examples-7

[64]: #externalpromiseequals

[65]: #parameters-26

[66]: #examples-8

[67]: #externalpromisedeferred

[68]: #examples-9

[69]: #externalpromisedefer

[70]: #externalpromisepublish

[71]: #externalpromisetimer

[72]: #parameters-27

[73]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[74]: #promise

[75]: https://promisesaplus.com/

[76]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

[77]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[78]: #deferredpromise

[79]: #publishedpromise
snd-admin@SND-IT-03:~/Desktop/Repos/Px$ ^C
snd-admin@SND-IT-03:~/Desktop/Repos/Px$ ^C
snd-admin@SND-IT-03:~/Desktop/Repos/Px$ 