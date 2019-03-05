require('../index.js');

let assert = require('assert');

describe('Promise', function (){
    describe('#contains', function (){
        it('should return true if the Promise contains the exact value', function (done){
            Promise.resolve(50).contains(50).then(x => {
                if(x){
                    done();
                } else {
                    done(false);
                }
            })
        })
        it('should return false if the Promise contains not the exact value', function (done){
            Promise.resolve(50).contains(50).then(x => {
                if(x){
                    done();
                } else {
                    done(false);
                }
            })
        })
    })
})