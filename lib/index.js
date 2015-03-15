// Load modules

var Traverse = require('traverse');


// Declare internals

module.exports.creditCard = 1;
module.exports.remove = 2;
module.exports.censor = 4;

module.exports = function(obj, options) {

    Traverse(obj).forEach(function (x) {

        for (var key in x) {

            for(var optionKey in options) {

                if (key === optionKey) {

                    switch (options[key]) {
                        case module.exports.creditCard:

                            var value = x[key].toString();
                            var matchResult = value.match(/^(.+)(....)$/);
                            var firstPart = matchResult[1];
                            var lastPart = matchResult[2];
                            firstPart = firstPart.replace(/./g, 'X');
                            value = [firstPart, lastPart].join('');
                            x[key] = value;
                            break;
                        default:
                            var p = require('purdy');
                            p('bad mojo');
                    }

                    this.update(x);
                }
            }
        }
    });

    return obj;
};
