"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 *
 */
class Hosts {
  /**
   *
   */
  constructor() {
    this._hosts = [];
  }
  /**
   *
   * @return {Array}
   */


  get hosts() {
    return this._hosts;
  }
  /**
   *
   * @param value
   */


  set hosts(value) {
    this._hosts = value;
  }
  /**
   *
   * @param host
   */


  add(host) {
    this._hosts.push(host);
  }
  /**
   *
   * @return {string}
   * @private
   */


  __toString() {
    let hosts = '';

    this._hosts.forEach(host => {
      hosts += host.toString();
    });

    return hosts;
  }

}

var _default = Hosts;
exports.default = _default;