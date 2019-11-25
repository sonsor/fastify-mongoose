'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 */
var Hosts = function () {
    /**
     *
     */
    function Hosts() {
        _classCallCheck(this, Hosts);

        this._hosts = [];
    }

    /**
     *
     * @return {Array}
     */


    _createClass(Hosts, [{
        key: 'add',


        /**
         *
         * @param host
         */
        value: function add(host) {
            this._hosts.push(host);
        }

        /**
         *
         * @return {string}
         * @private
         */

    }, {
        key: '__toString',
        value: function __toString() {
            var hosts = '';
            this._hosts.forEach(function (host) {
                hosts += host.toString();
            });
            return hosts;
        }
    }, {
        key: 'hosts',
        get: function get() {
            return this._hosts;
        }

        /**
         *
         * @param value
         */
        ,
        set: function set(value) {
            this._hosts = value;
        }
    }]);

    return Hosts;
}();

exports.default = Hosts;