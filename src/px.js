/**
 * @license MIT
 * MIT License
 * 
 * Copyright (c) 2019 Alexis Munsayac
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2019
 */
/**
 * @class
 * @clasdesc
 * DeferredPromise is a Promise that doesn't execute the supplied function to its constructor.
 * DeferredPromise executes the function whenever a then, catch, or finally is called upon it.
 */
class DeferredPromise{
    constructor(fn){
        this._supplier = fn;
    }
    /**
     * @description
     * Creates a DeferredPromise which resolves the given value.
     * @param {*} value 
     */
    static resolve(value){
        return new DeferredPromise(res => res(value));
    }
    /**
     * @description
     * Creates a DeferredPromise which rejects the given value.
     * @param {*} value 
     */
    static reject(value){
        return new DeferredPromise((res, rej) => rej(value));
    }
    /**
     * Attaches callbacks to the PublishedPromise
     * @param {Function} res - onResolve function
     * @param {Function=} rej - onReject function
     * @returns {Promise} 
     */
    then(res, rej){
        return new Promise(this._supplier).then(res, rej);
    }
    /**
     * Catches the rejection value of the PublishedPromise
     * 
     * @param {Function} rej - onReject function
     * @returns {Promise}
     */
    catch(rej){
        return new Promise(this._supplier).catch(rej);
    }
    /**
     * Finalize the DeferredPromise
     * 
     * @param {Function} fin
     * @returns {Promise}
     */
    finally(fin){
        return new Promise(this._supplier).finally(fin);
    }
    /**
     * @description
     * Retries a rejected DeferredPromise multiple times until a resolved value is fulfilled.
     * 
     * If a function is provided, Retries until the function returns false, in which
     * will return a rejected Promise with the propagated error.
     *
     * @example
     * Promise.reject(50).defer().retry();
     * 
     * @param {Function=} predicate - a function that returns a boolean
     * @returns {Promise}
     */
    retry(fn){
        let supplier = this._supplier;
        if(typeof fn == "function"){
            let tries = 0
            let resub = () => new Promise(supplier).then(
                x => x,
                x => fn(++tries, x) ? resub() : Promise.reject(x)
            );
    
            return resub();
        }
        let resub = () => new Promise(supplier).then(
            x => x,
            x => resub()
        );
        return resub();
    }
    /**
     * @description
     * Delays the DeferredPromise by a significant amount of time 
     * before running the executor.
     * 
     * @example
     * Promise.resolve(50).defer().delay(5000);
     * 
     * @param {} amount 
     */
    delay(amount){
        return new DeferredPromise(res => {
            setTimeout(() => {
                res(new Promise(supplier));
            }, amount, );
        })
    }
    /**
     * @description
     * Creates a Promise version of a DeferredPromise
     * 
     * @returns {Promise}
     */
    toPromise(){
        return new Promise(this._supplier)
    }
}

/**
 * @class
 * @classdesc
 * PublishedPromise is a Promise that you can resolve/reject asynchronously.
 */
class PublishedPromise{
    constructor(fn){
        this._promise = new Promise((res, rej) => {
            this._resolve = res;
            this._reject = rej;

            if(typeof fn === "function"){
                fn(res, rej)
            }
        })
    }
    /**
     * Resolves the PublishedPromise
     * @param {*} value 
     */
    resolve(value){
        this._resolve(value);
    }
    /**
     * Rejects the PublishedPromise
     * @param {*} value 
     */
    reject(value){
        this._reject(value);
    }
    /**
     * Attaches callbacks to the PublishedPromise
     * @param {Function} res - onResolve function
     * @param {Function=} rej - onReject function
     * @returns {Promise} 
     */
    then(res, rej){
        return this._promise.then(res, rej);
    }
    /**
     * Catches the rejection value of the PublishedPromise
     * 
     * @param {Function} rej - onReject function
     * @returns {Promise}
     */
    catch(rej){
        return this._promise.then(res, rej);
    }
    /**
     * Finalize the PublishedPromise
     * 
     * @param {Function} fin
     * @returns {Promise}
     */
    finally(fin){
        return this._promise.finally(fin);
    }
    /**
     * @description
     * Creates a Promise version of a PublishedPromise
     * 
     * @returns {Promise}
     */
    toPromise(){
        return this._promise;
    }
}
/**
 * The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
 * @external Promise
 * @see {@link https://promisesaplus.com/}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise}
 */
/**
 * @function external:Promise#contains 
 * @description
 * Tests the resolved value of a Promise and a given value with a given function
 * and resolves to the function's result.
 * 
 * If the function is not provided, `contains` will perform an equality comparison.
 * @example
 * Promise.resolve(50).contains(50);
 * Promise.resolve(50).contains(50, (a, b) => a % b == 0);
 * 
 * @param {*} value - the value to be compared with the Promise' resolved value
 * @param {Function=} bipredicate - a function that compares both the resolved value and the given value.
 * @returns {Promise}
 */
Promise.prototype.contains = function (value, bipredicate){
    if(typeof bipredicate === "function"){
        return this.then(x => bipredicate(x, value));
    }
    return this.then(x => x == value);
}
/**
 * @function external:Promise#delay 
 * @description
 * Delays the fulfillment of a Promise.
 * 
 * @example
 * Promise.resolve(50).delay(5000);
 * 
 * @param {Number} amount - The amount of time in milliseconds
 * @returns {Promise}
 */
Promise.prototype.delay = function (amount){
    return this.then(
        x => new Promise((res, rej) => {
            setTimeout(res, amount, x);
        }),
        x => new Promise((res, rej) => {
            setTimeout(rej, amount, x);
        })
    );
}
/**
 * @function external:Promise.compare 
 * @description
 * Compares the resolved values of the two Promises.
 * 
 * @example
 * let a = Promise.resolve(50);
 * let b = Promise.resolve(25);
 * 
 * Promise.compare(a, b, (x, y) => x%y == 0);
 * 
 * @param {!Promise} a - The Promise to be compared with
 * @param {!Promise} b - The Promise to be compared with
 * @param {!Function} comparator - A function that compares the resolved values of the two Promises
 * @returns {Promise}
 */
Promise.compare = function (a, b, comparator){
    return Promise.all([a, b]).then(x => comparator(x[0], x[1]));
}
/**
 * @function external:Promise.equals 
 * @description
 * Compares the resolved values of the two Promises by equality.
 * 
 * @example
 * let a = Promise.resolve(50);
 * let b = Promise.resolve(25);
 * 
 * Promise.equals(a, b);
 * 
 * @param {!Promise} a - The Promise to be compared with
 * @param {!Promise} b - The Promise to be compared with
 * @returns {Promise}
 */
Promise.equals = function (a, b){
    return Promise.compare(a, b, (x, y) => x == y);
}
/**
 * @function external:Promise.deferred
 * @description
 * Creates a DeferredPromise
 * @example
 * Promise.deferred(res => res("Hello World"));
 * 
 * @return {DeferredPromise}
 */
Promise.deferred = function (fn){
    return new DeferredPromise(fn);
}
/**
 * @function external:Promise#defer
 * @description
 * Creates a DeferredPromise whose value depends on the fulfillment of the given Promise.
 * @example
 * Promise.resolve(50).defer().delay(5000);
 * @return {Promise}
 */
Promise.prototype.defer = function (){
    return this.then(
        x => DeferredPromise.resolve(x),
        x => DeferredPromise.reject(x)
    )
}
/**
 * @function external:Promise.publish
 * @description
 * Creates a PublishedPromise which allows asynchronous fulfillment.
 * @example
 * let promise = Promise.publish();
 * promise.then(x => {
 *     console.log("Resolved: "..x)
 * })
 * promise.resolve(50);
 * @return {PublishedPromise}
 */
Promise.publish = function (fn){
    return new PublishedPromise(fn);
}
/**
 * @function external:Promise.timer
 * @description
 * Creates a Promise that resolves after a significant amount of time
 * @example
 * await Promise.timer(5000);
 * @param {Number} amount - the time in milliseconds.
 * @returns {Promise}
 */
Promise.timer = function (amount){
    return new Promise(res => {
        setTimeout(res, amount, 0);
    });
}
/**
 * @function external:Promise#timeout
 * @description
 * Rejects if the given Promise didn't fulfill within a given timeout. Otherwise, it resolves with the given Promise.
 * @example
 * Promise.timer(5000).timeout(2500);
 * @param {Number} amount - the time in milliseconds.
 * @returns {Promise}
 */
Promise.prototype.timeout = function (amount){
    let success = false;
    this.then(x => {success = true});
    return new Promise((res, rej) => {
        setTimeout(() => {
            if(success){
                res(this);
            } else {
                rej(new Error("Promise TimeoutException"));
            }
        }, amount);
    })
}