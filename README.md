# Px
Extension functions for JS Promise
## Classes

<dl>
<dt><a href="#DeferredPromise">DeferredPromise</a></dt>
<dd></dd>
<dt><a href="#PublishedPromise">PublishedPromise</a></dt>
<dd><p>PublishedPromise is a Promise that you can resolve/reject asynchronously.</p>
</dd>
</dl>

## External

<dl>
<dt><a href="#external_Promise">Promise</a></dt>
<dd><p>The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.</p>
</dd>
</dl>

<a name="DeferredPromise"></a>

## DeferredPromise
**Kind**: global class  
**Clasdesc**: DeferredPromise is a Promise that doesn't execute the supplied function to its constructor.
DeferredPromise executes the function whenever a then, catch, or finally is called upon it.  

* [DeferredPromise](#DeferredPromise)
    * _instance_
        * [.then(res, [rej])](#DeferredPromise+then) ⇒ <code>Promise</code>
        * [.catch(rej)](#DeferredPromise+catch) ⇒ <code>Promise</code>
        * [.finally(fin)](#DeferredPromise+finally) ⇒ <code>Promise</code>
        * [.retry([predicate])](#DeferredPromise+retry) ⇒ <code>Promise</code>
        * [.delay(amount)](#DeferredPromise+delay)
        * [.toPromise()](#DeferredPromise+toPromise) ⇒ <code>Promise</code>
    * _static_
        * [.resolve(value)](#DeferredPromise.resolve)
        * [.reject(value)](#DeferredPromise.reject)

<a name="DeferredPromise+then"></a>

### deferredPromise.then(res, [rej]) ⇒ <code>Promise</code>
Attaches callbacks to the PublishedPromise

**Kind**: instance method of [<code>DeferredPromise</code>](#DeferredPromise)  

| Param | Type | Description |
| --- | --- | --- |
| res | <code>function</code> | onResolve function |
| [rej] | <code>function</code> | onReject function |

<a name="DeferredPromise+catch"></a>

### deferredPromise.catch(rej) ⇒ <code>Promise</code>
Catches the rejection value of the PublishedPromise

**Kind**: instance method of [<code>DeferredPromise</code>](#DeferredPromise)  

| Param | Type | Description |
| --- | --- | --- |
| rej | <code>function</code> | onReject function |

<a name="DeferredPromise+finally"></a>

### deferredPromise.finally(fin) ⇒ <code>Promise</code>
Finalize the DeferredPromise

**Kind**: instance method of [<code>DeferredPromise</code>](#DeferredPromise)  

| Param | Type |
| --- | --- |
| fin | <code>function</code> | 

<a name="DeferredPromise+retry"></a>

### deferredPromise.retry([predicate]) ⇒ <code>Promise</code>
Retries a rejected DeferredPromise multiple times until a resolved value is fulfilled.

If a function is provided, Retries until the function returns false, in which
will return a rejected Promise with the propagated error.

**Kind**: instance method of [<code>DeferredPromise</code>](#DeferredPromise)  

| Param | Type | Description |
| --- | --- | --- |
| [predicate] | <code>function</code> | a function that returns a boolean |

**Example**  
```js
Promise.reject(50).defer().retry();
```
<a name="DeferredPromise+delay"></a>

### deferredPromise.delay(amount)
Delays the DeferredPromise by a significant amount of time 
before running the executor.

**Kind**: instance method of [<code>DeferredPromise</code>](#DeferredPromise)  

| Param |
| --- |
| amount | 

**Example**  
```js
Promise.resolve(50)
```
<a name="DeferredPromise+toPromise"></a>

### deferredPromise.toPromise() ⇒ <code>Promise</code>
Creates a Promise version of a DeferredPromise

**Kind**: instance method of [<code>DeferredPromise</code>](#DeferredPromise)  
<a name="DeferredPromise.resolve"></a>

### DeferredPromise.resolve(value)
Creates a DeferredPromise which resolves the given value.

**Kind**: static method of [<code>DeferredPromise</code>](#DeferredPromise)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

<a name="DeferredPromise.reject"></a>

### DeferredPromise.reject(value)
Creates a DeferredPromise which rejects the given value.

**Kind**: static method of [<code>DeferredPromise</code>](#DeferredPromise)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

<a name="PublishedPromise"></a>

## PublishedPromise
PublishedPromise is a Promise that you can resolve/reject asynchronously.

**Kind**: global class  

* [PublishedPromise](#PublishedPromise)
    * [.resolve(value)](#PublishedPromise+resolve)
    * [.reject(value)](#PublishedPromise+reject)
    * [.then(res, [rej])](#PublishedPromise+then) ⇒ <code>Promise</code>
    * [.catch(rej)](#PublishedPromise+catch) ⇒ <code>Promise</code>
    * [.finally(fin)](#PublishedPromise+finally) ⇒ <code>Promise</code>
    * [.contains(value, [bipredicate])](#PublishedPromise+contains) ⇒ <code>Promise</code>

<a name="PublishedPromise+resolve"></a>

### publishedPromise.resolve(value)
Resolves the PublishedPromise

**Kind**: instance method of [<code>PublishedPromise</code>](#PublishedPromise)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

<a name="PublishedPromise+reject"></a>

### publishedPromise.reject(value)
Rejects the PublishedPromise

**Kind**: instance method of [<code>PublishedPromise</code>](#PublishedPromise)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

<a name="PublishedPromise+then"></a>

### publishedPromise.then(res, [rej]) ⇒ <code>Promise</code>
Attaches callbacks to the PublishedPromise

**Kind**: instance method of [<code>PublishedPromise</code>](#PublishedPromise)  

| Param | Type | Description |
| --- | --- | --- |
| res | <code>function</code> | onResolve function |
| [rej] | <code>function</code> | onReject function |

<a name="PublishedPromise+catch"></a>

### publishedPromise.catch(rej) ⇒ <code>Promise</code>
Catches the rejection value of the PublishedPromise

**Kind**: instance method of [<code>PublishedPromise</code>](#PublishedPromise)  

| Param | Type | Description |
| --- | --- | --- |
| rej | <code>function</code> | onReject function |

<a name="PublishedPromise+finally"></a>

### publishedPromise.finally(fin) ⇒ <code>Promise</code>
Finalize the PublishedPromise

**Kind**: instance method of [<code>PublishedPromise</code>](#PublishedPromise)  

| Param | Type |
| --- | --- |
| fin | <code>function</code> | 

<a name="PublishedPromise+contains"></a>

### publishedPromise.contains(value, [bipredicate]) ⇒ <code>Promise</code>
Tests the resolved value of a Promise and a given value with a given function
and resolves to the function's result.

If the function is not provided, `contains` will perform an equality comparison.

**Kind**: instance method of [<code>PublishedPromise</code>](#PublishedPromise)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | the value to be compared with the Promise' resolved value |
| [bipredicate] | <code>function</code> | a function that compares both the resolved value and the given value. |

**Example**  
```js
Promise.resolve(50).contains(50);
Promise.resolve(50).contains(50, (a, b) => a % b == 0);
```
<a name="external_Promise"></a>

## Promise
The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

**Kind**: global external  
**See**

- [https://promisesaplus.com/](https://promisesaplus.com/)
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)


* [Promise](#external_Promise)
    * _instance_
        * [.contains(value, [bipredicate])](#external_Promise+contains) ⇒ <code>Promise</code>
        * [.delay(amount)](#external_Promise+delay) ⇒ <code>Promise</code>
        * [.defer()](#external_Promise+defer) ⇒ <code>Promise</code>
    * _static_
        * [.compare(a, b, comparator)](#external_Promise.compare) ⇒ <code>Promise</code>
        * [.equals(a, b)](#external_Promise.equals) ⇒ <code>Promise</code>
        * [.deferred()](#external_Promise.deferred) ⇒ [<code>DeferredPromise</code>](#DeferredPromise)
        * [.publish()](#external_Promise.publish) ⇒ [<code>PublishedPromise</code>](#PublishedPromise)
        * [.timer(amount)](#external_Promise.timer) ⇒ <code>Promise</code>

<a name="external_Promise+contains"></a>

### promise.contains(value, [bipredicate]) ⇒ <code>Promise</code>
Tests the resolved value of a Promise and a given value with a given function
and resolves to the function's result.

If the function is not provided, `contains` will perform an equality comparison.

**Kind**: instance method of [<code>Promise</code>](#external_Promise)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | the value to be compared with the Promise' resolved value |
| [bipredicate] | <code>function</code> | a function that compares both the resolved value and the given value. |

**Example**  
```js
Promise.resolve(50).contains(50);
Promise.resolve(50).contains(50, (a, b) => a % b == 0);
```
<a name="external_Promise+delay"></a>

### promise.delay(amount) ⇒ <code>Promise</code>
Delays the fulfillment of a Promise.

**Kind**: instance method of [<code>Promise</code>](#external_Promise)  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>Number</code> | The amount of time in milliseconds |

**Example**  
```js
Promise.resolve(50).delay(5000);
```
<a name="external_Promise+defer"></a>

### promise.defer() ⇒ <code>Promise</code>
Creates a DeferredPromise whose value depends on the fulfillment of the given Promise.

**Kind**: instance method of [<code>Promise</code>](#external_Promise)  
<a name="external_Promise.compare"></a>

### Promise.compare(a, b, comparator) ⇒ <code>Promise</code>
Compares the resolved values of the two Promises.

**Kind**: static method of [<code>Promise</code>](#external_Promise)  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Promise</code> | The Promise to be compared with |
| b | <code>Promise</code> | The Promise to be compared with |
| comparator | <code>function</code> | A function that compares the resolved values of the two Promises |

**Example**  
```js
let a = Promise.resolve(50);
let b = Promise.resolve(25);

Promise.compare(a, b, (x, y) => x%y == 0);
```
<a name="external_Promise.equals"></a>

### Promise.equals(a, b) ⇒ <code>Promise</code>
Compares the resolved values of the two Promises by equality.

**Kind**: static method of [<code>Promise</code>](#external_Promise)  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Promise</code> | The Promise to be compared with |
| b | <code>Promise</code> | The Promise to be compared with |

**Example**  
```js
let a = Promise.resolve(50);
let b = Promise.resolve(25);

Promise.equals(a, b);
```
<a name="external_Promise.deferred"></a>

### Promise.deferred() ⇒ [<code>DeferredPromise</code>](#DeferredPromise)
Creates a DeferredPromise

**Kind**: static method of [<code>Promise</code>](#external_Promise)  
**Example**  
```js
Promise.deferred(() => Promise.resolve("Success"));
```
<a name="external_Promise.publish"></a>

### Promise.publish() ⇒ [<code>PublishedPromise</code>](#PublishedPromise)
Creates a PublishedPromise which allows asynchronous fulfillment.

**Kind**: static method of [<code>Promise</code>](#external_Promise)  
<a name="external_Promise.timer"></a>

### Promise.timer(amount) ⇒ <code>Promise</code>
Creates a Promise that resolves after a significant amount of time

**Kind**: static method of [<code>Promise</code>](#external_Promise)  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>Number</code> | the time in milliseconds. |