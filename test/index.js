var Blur = require('../');


// Load modules

var Lab = require('lab');
var Code = require('code');


// Test shortcuts

var lab = exports.lab = Lab.script();
var expect = Code.expect;
var describe = lab.describe;
var it = lab.it;


describe('blur', function () {

    it('blurs cardicard information', function (done) {

        var obj = {
            creditcard: {
                number: 'ABCDEFGHIJKLMNOP',
                year: 17,
                month: 4
            }
        };

        var expected = {
            creditcard: {
                number: 'XXXXXXXXXXXXMNOP',
                year: 17,
                month: 4
            }
        }

        var result = Blur(obj, { number: Blur.creditCard });
        expect(result).to.deep.equal(expected);
        done();
    });
});



