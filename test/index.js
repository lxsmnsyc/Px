let Px = require('../index.js');
let DeferredPromise = Px.DeferredPromise;
let PublishedPromise = Px.PublishedPromise;

let assert = require('assert');

/**
 * @test {Promise}
 */
describe('Promise', function (){
    /**
     * @test {Promise.compare}
     */
    describe('.compare', function (){
        it('should return a Promise', function (){
            let A = Promise.resolve(50);
            let B = Promise.resolve(50);
            assert(Promise.compare(A, B, (x, y) => x == y) instanceof Promise);
        });
    });
    /**
     * @test {Promise.deferred}
     */
    describe('.deferred', function (){
        it('should return a DeferredPromise', function (){
            assert(Promise.deferred(r => r()) instanceof DeferredPromise);
        });
        it('should return a DeferredPromise, even if the given paramater is not a function.', function (){
            assert(Promise.deferred() instanceof DeferredPromise);
            assert(Promise.deferred(1) instanceof DeferredPromise);
            assert(Promise.deferred(true) instanceof DeferredPromise);
            assert(Promise.deferred("test") instanceof DeferredPromise);
            assert(Promise.deferred({}) instanceof DeferredPromise);
            assert(Promise.deferred([]) instanceof DeferredPromise);
        });
    });
    /**
     * @test {Promise.delayedResolve}
     */
    describe('.delayedResolve', function (){
        it('should return a Promise', function (){
            assert(Promise.delayedResolve("Success", 100) instanceof Promise);
        });
        it('should be resolved on the given time', function (done){
            let fulfilled;
            let timer = Promise.delayedResolve("Success", 100).then(() => {
                fulfilled = true;
            });

            setTimeout(() => {
                if(fulfilled){
                    done()
                } else {
                    done(false);
                }
            }, 100)
        });
    });
    /**
     * @test {Promise.delayedReject}
     */
    describe('.delayedReject', function (){
        it('should return a Promise', function (){
            assert(Promise.delayedReject("Rejected", 100) instanceof Promise);
        });
        it('should be resolved on the given time', function (done){
            let fulfilled;
            let timer = Promise.delayedReject("Rejected", 100).then(() => {
                fulfilled = true;
            });

            setTimeout(() => {
                if(fulfilled){
                    done()
                } else {
                    done(false);
                }
            }, 100)
        });
    });
    /**
     * @test {Promise.fromCallable}
     */
    describe('.fromCallable', function (){
        it('should return a Promise', function (){
            assert(Promise.fromCallable(() => 50) instanceof Promise);
        });
    });
    /**
     * @test {Promise.fromCallableDeferred}
     */
    describe('.fromCallableDeferred', function (){
        it('should return a DeferredPromise', function (){
            assert(Promise.fromCallable(() => 50) instanceof Promise);
        });
    });
    /**
     * @test {Promise.publish}
     */
    describe('.publish', function (){
        it('should return a PublishedPromise', function (){
            assert(Promise.publish(r => r()) instanceof PublishedPromise);
        })
        it('should return a PublishedPromise, even if the given paramater is not a function.', function (){
            assert(Promise.publish() instanceof PublishedPromise);
            assert(Promise.publish(1) instanceof PublishedPromise);
            assert(Promise.publish(true) instanceof PublishedPromise);
            assert(Promise.publish("test") instanceof PublishedPromise);
            assert(Promise.publish({}) instanceof PublishedPromise);
            assert(Promise.publish([]) instanceof PublishedPromise);
        })
    });
    /**
     * @test {Promise.timer}
     */
    describe('.timer', function (){
        it('should return a Promise', function (){
            assert(Promise.timer(100) instanceof Promise);
        });
        it('should be resolved on the given time', function (done){
            let fulfilled;
            let timer = Promise.timer(100).then(() => {
                fulfilled = true;
            });

            setTimeout(() => {
                if(fulfilled){
                    done()
                } else {
                    done(false);
                }
            }, 100)
        });
    });
    /**
     * @test {Promise#contains}
     */
    describe('#contains', function (){
        it('should return a Promise', function (){
            assert(Promise.resolve(50).contains(50) instanceof Promise);
        })
        it('should resolve to true if the Promise contains the exact value', function (done){
            Promise.resolve(50).contains(50).then(x => {
                if(x){
                    done();
                } else {
                    done(false);
                }
            });
        });
        it('should resolve to false if the Promise contains not the exact value', function (done){
            Promise.resolve(50).contains(25).then(x => {
                if(!x){
                    done();
                } else {
                    done(false);
                }
            });
        });
        it('should resolve to true if the Promise and the value passes the test function', function (done){
            Promise.resolve(50).contains(50, (a, b) => a == b).then(x => {
                if(x){
                    done();
                } else {
                    done(false);
                }
            });
        })
        it('should resolve to false if the Promise and the value fails the test function', function (done){
            Promise.resolve(50).contains(25, (a, b) => a == b).then(x => {
                if(!x){
                    done();
                } else {
                    done(false);
                }
            });
        });
    });
    /**
     * @test {Promise#defer}
     */
    describe('#defer', function (){
        it('should return a DeferredPromise', function (){
            assert(Promise.resolve(50).defer() instanceof DeferredPromise);
        });
    });
    /**
     * @test {Promise#delay}
     */
    describe('#delay', function (){
        it('should return a Promise', function (){
            assert(Promise.resolve(50).delay(100) instanceof Promise);
        });
        it('should be resolved on the given time', function (done){
            let fulfilled;
            
            Promise.resolve(50).delay(100).then(() => {
                fulfilled = true;
            });

            setTimeout(() => {
                if(fulfilled){
                    done()
                } else {
                    done(false);
                }
            }, 100)
        });
    });
    /**
     * @test {Promise#timeout}
     */
    describe('#timeout', function (){
        it('should return a Promise', function (){
            assert(Promise.timer(100).timeout(200) instanceof Promise);
        });
        it('should catch an error if the Promise fails to resolve before the timeout expires.', async function (){
            let expired;

            await Promise.timer(200).timeout(100).catch(x => {
                expired = true;
            });
            
            assert(expired);
        });
        it('should resolve if the Promise resolves before the timeout expires.', async function (){
            let expired;

            await Promise.timer(100).timeout(200).then(x => {
                expired = true;
            });
            
            assert(expired);
        });
    });
});