'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 */
var Host = function () {
  /**
   *
   * @param host
   * @param port
   */
  function Host(host, port) {
    _classCallCheck(this, Host);

    this._host = host;
    this._port = port;
  }

  /**
   *
   * @param value
   */


  _createClass(Host, [{
    key: '__toString',


    /**
     *
     * @return {string}
     * @private
     */
    value: function __toString() {
      return this._host + ':' + this._port;
    }
  }, {
    key: 'host',
    set: function set(value) {
      this._host = value;
    }

    /**
     *
     * @param value
     */
    ,


    /**
     *
     * @return {*}
     */
    get: function get() {
      return this._host;
    }

    /**
     *
     * @return {*}
     */

  }, {
    key: 'port',
    set: function set(value) {
      this._port = value;
    },
    get: function get() {
      return this._port;
    }
  }]);

  return Host;
}();

exports.default = Host;