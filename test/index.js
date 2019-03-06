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
    describe('.equals', function (){
        it('should return a Promise', function (){
            let A = Promise.resolve(50);
            let B = Promise.resolve(50);
            assert(Promise.equals(A, B) instanceof Promise);
        });
        it('should resolve to true if the Promises values are equal', function (done){
            let A = Promise.resolve(50);
            let B = Promise.resolve(50);

            Promise.equals(A, B).then(x => {
                if(x){
                    done();
                } else {
                    done(false);
                }
            });
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
            assert(Promise.fromCallableDeferred(() => 50) instanceof DeferredPromise);
        });
        it('should returned a rejected DeferredPromise on error', function (){
            assert(Promise.fromCallableDeferred(() => {throw "error";}) instanceof DeferredPromise);
        })
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
        it('should return a Promise', function (){
            assert(Promise.resolve(50).defer() instanceof Promise);
        });
        it('should defer on resolved Promise', async function (){
            let success;

            await Promise.resolve(50).defer().then(x => {
                success = x == 50;
            });

            assert(success);
        });
        it('should defer on rejected Promise', async function (){
            let success;

            await Promise.reject(50).defer().catch(x => {
                success = x == 50;
            });

            assert(success);
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
        it('should be rejected on the given time', function (done){
            let fulfilled;
            
            Promise.reject(50).delay(100).catch(() => {
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
    describe('#test', function (){
        it('should return a Promise', function (){
            assert(Promise.resolve(100).test(x => x == 100) instanceof Promise);
        });
        it('should return the same Promise if the parameter received is not a function.', function (){
            let p = Promise.resolve(100);

            assert(p.test() === p);
        });
        it('should be resolved if the resolved Promise passes the test', async function (){
            let success
            await Promise.resolve(100).test(x => x == 100).then(x => {
                success = x == 100;
            });

            assert(success);
        });
        it('should be resolved if the rejected Promise passes the test', async function (){
            let success
            await Promise.reject(100).test(x => x == 100).then(x => {
                success = x == 100;
            });

            assert(success);
        });
        it('should be rejected if the resolved Promise fails the test', async function (){
            let success
            await Promise.resolve(100).test(x => x == 50).catch(x => {
                success = x == 100;
            });

            assert(success);
        });
        it('should be rejected if the rejected Promise fails the test', async function (){
            let success
            await Promise.reject(100).test(x => x == 50).catch(x => {
                success = x == 100;
            });

            assert(success);
        });
    })
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

describe('DeferredPromise', function (){
    describe('.fromCallable', function (){
        it('should return a DeferredPromise', function (){
            assert(DeferredPromise.fromCallable(() => 50) instanceof DeferredPromise);
        });
        it('should returned a rejected DeferredPromise on error', function (){
            assert(DeferredPromise.fromCallable(() => {throw "error";}) instanceof DeferredPromise);
        })
    });
    describe('.resolve', function (){
        it('should return a DeferredPromise', function (){
            assert(DeferredPromise.resolve(50) instanceof DeferredPromise);
        });
        it('should return a resolved DeferredPromise', async function (){
            let success;

            await DeferredPromise.resolve(50).then(x => {
                success = x == 50;
            })

            assert(success);
        });
    });
    describe('.reject', function (){
        it('should return a DeferredPromise', function (){
            assert(DeferredPromise.reject(50) instanceof DeferredPromise);
        });
        it('should return a rejected DeferredPromise', async function (){
            let success;

            await DeferredPromise.reject(50).catch(x => {
                success = x == 50;
            })

            assert(success);
        });
    });
    describe('#catch', function (){
        it('should return a Promise', function (){
            assert(DeferredPromise.reject(50).catch(x => x) instanceof Promise);
        });
        it('should catch a rejected DeferredPromise', async function (){
            let success;

            await DeferredPromise.reject(50).catch(x => {
                success = x == 50;
            })

            assert(success);
        });
    });
    describe('#finally', function (){
        it('should return a Promise', function (){
            assert(DeferredPromise.resolve(50).finally(() => "executed") instanceof Promise);
        });
        it('should be executed on a resolved DeferredPromise', async function (){
            let success;

            await DeferredPromise.resolve(50).finally(() => {
                success = true;
                return true;
            })

            assert(success);
        });
        it('should be executed on a rejected DeferredPromise', async function (){
            let success;

            await DeferredPromise.reject(50).finally(() => {
                success = true;
                return true;
            }).catch(x => x);

            assert(success);
        });
    });

    describe('#retry', function (){
        it('should return a Promise', function (){
            assert(DeferredPromise.reject(50).retry(x => x < 2) instanceof Promise);
        }); 
        it('should retry on a certain amount of tries before throwing the error', async function (){
            let maxTries = parseInt(Math.random(100)) + 1;
            let tries = 0;
            let thrown;

            await DeferredPromise.reject(50).retry(x => {
                tries++;
                return x < maxTries;
            }).catch(x => {
                thrown = x == 50;
            });

            assert(thrown);
            assert(tries == maxTries);
        }); 
        it('should not retry on a resolved DeferredPromise', async function (){
            let maxTries = parseInt(Math.random(100)) + 1;
            let tries = 0;
            let success;

            await DeferredPromise.resolve(50).retry(x => {
                tries++;
                return x < maxTries;
            }).then(x => {
                success = x == 50;
            });

            assert(success);
            assert(tries == 0);
        }); 
        it.skip('should retry infinitely on a rejected Promise if no functions are provided.', function (done){
            let success = false;

            setTimeout(() => {
                done(!success)
            }, 0);
            DeferredPromise.reject(50).retry().then(x => {
                success = x == 50;
            });
        }); 
        it('should not retry infinitely on a resolved Promise if no functions are provided.', async function (){
            let success = false;

            await DeferredPromise.resolve(50).retry().then(x => {
                success = x == 50;
            });

            assert(success);
        }); 
    });

    describe('#delay', function (){
        it('should return a DeferredPromise', function (){
            assert(DeferredPromise.reject(50).delay(100) instanceof DeferredPromise);
        }); 
        it('should expire on the given timeout when callback attaches.', function (done){
            let success;
            DeferredPromise.resolve(50).delay(100).then(x => {
                success = x == 50;
            });

            setTimeout(() => {
                if(success){
                    done();
                } else {
                    done(false);
                }
            }, 100);
        }); 
    });
    describe('#toPromise', function (){
        it('should return a Promise', function (){
            assert(DeferredPromise.reject(50).toPromise() instanceof Promise);
        });
    });
});

describe('PublishedPromise', function (){
    describe('#resolve', function (){
        it('should asynchronously resolve', function (done){
            let published = new PublishedPromise();

            published.then(x => {
                if(x == 50){
                    done();
                } else {
                    done(false);
                }
            });

            published.resolve(50);
        });
    }); 
    describe('#reject', function (){
        it('should asynchronously reject', function (done){
            let published = new PublishedPromise();

            published.catch(x => {
                if(x == 50){
                    done();
                } else {
                    done(false);
                }
            });

            published.reject(50);
        });
    }); 
    describe('#finally', function (){
        it('should return a Promise', function (){
            assert(new PublishedPromise().finally(() => "executed") instanceof Promise);
        });
        it('should be executed on a resolved PublishedPromise', function (done){
            let published = new PublishedPromise();

            published.finally(() => {
                done();
            });

            published.resolve(50);
        });
        it('should be executed on a rejected PublishedPromise', function (done){
            let published = new PublishedPromise();

            published.finally(() => {
                done();
            });

            published.reject(50);
        });
    });
    describe('#toPromise', function (){
        it('should return a Promise', function (){
            assert(new PublishedPromise().toPromise() instanceof Promise);
        });
    });
});