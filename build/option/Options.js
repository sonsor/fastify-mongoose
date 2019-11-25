'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Options = function () {
    /**
     *
     */
    function Options() {
        _classCallCheck(this, Options);

        this.options = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            autoIndex: false, // Don't build indexes
            reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
            reconnectInterval: 500, // Reconnect every 500ms
            poolSize: 10, // Maintain up to 10 socket connections
            // If not connected, return errors immediately rather than waiting for reconnect
            bufferMaxEntries: 0,
            connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            family: 4 // Use IPv4, skip trying IPv6
        };
    }

    /**
     *
     * @param key
     * @param value
     */


    _createClass(Options, [{
        key: 'set',
        value: function set(key, value) {
            if (typeof this.options[key] === 'undefined') {
                throw new Error('the options ' + key + ' not supported');
            }
            this.options[key] = value;
        }

        /**
         *
         * @param key
         * @return {*}
         */

    }, {
        key: 'get',
        value: function get(key) {
            if (typeof this.options[key] === 'undefined') {
                throw new Error('the options ' + key + ' not supported');
            }

            return this.options[key];
        }
    }]);

    return Options;
}();

exports.default = Options;