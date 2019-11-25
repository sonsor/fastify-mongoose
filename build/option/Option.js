"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 */
var Option = function () {
  /**
   *
   * @param key
   * @param value
   */
  function Option(key, value) {
    _classCallCheck(this, Option);

    this._key = key;
    this._value = value;
  }

  /**
   *
   * @return {*}
   */


  _createClass(Option, [{
    key: "key",
    get: function get() {
      return this._key;
    }

    /**
     *
     * @param value
     */
    ,
    set: function set(value) {
      this._key = value;
    }

    /**
     *
     * @return {*}
     */

  }, {
    key: "value",
    get: function get() {
      return this._value;
    }

    /**
     *
     * @param value
     */
    ,
    set: function set(value) {
      this._value = value;
    }
  }]);

  return Option;
}();

exports.default = Option;