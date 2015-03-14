// Load modules

var Traverse = require('traverse');


module.exports = function(obj, filter) {

    Traverse(obj).forEach(function (x) {

        for (var key in x) {
            if (filter.indexOf(key) !== -1) {
                x[key] = '[SCRUBBED]';
                this.update(x);
            }
        }
    });

    return obj;
};
