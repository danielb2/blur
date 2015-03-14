var Scrub = require('../');


// Load modules

var Lab = require('lab');
var Code = require('code');


// Test shortcuts

var lab = exports.lab = Lab.script();
var expect = Code.expect;
var describe = lab.describe;
var it = lab.it;


describe('object scrub', function () {

    it('scrubs an object', function (done) {

        var obj = {
            creditcard: {
                number: 411111111111111,
                expiryDay: 17,
                expiryMonth: 4
            }
        };

        var expected = {
            creditcard: {
                number: '[SCRUBBED]',
                expiryDay: 17,
                expiryMonth: 4
            }
        }

        var result = Scrub(obj, ['number']);
        expect(result).to.deep.equal(expected);
        done();
    });
});



