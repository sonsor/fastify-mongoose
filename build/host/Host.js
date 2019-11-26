"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 *
 */
class Host {
  /**
   *
   * @param host
   * @param port
   */
  constructor(host, port) {
    this._host = host;
    this._port = port;
  }
  /**
   *
   * @param value
   */


  set host(value) {
    this._host = value;
  }
  /**
   *
   * @param value
   */


  set port(value) {
    this._port = value;
  }
  /**
   *
   * @return {*}
   */


  get host() {
    return this._host;
  }
  /**
   *
   * @return {*}
   */


  get port() {
    return this._port;
  }
  /**
   *
   * @return {string}
   * @private
   */


  toString() {
    return this._host + ':' + this._port;
  }

}

var _default = Host;
exports.default = _default;