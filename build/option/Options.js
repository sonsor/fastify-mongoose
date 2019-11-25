"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Options {
  /**
   *
   */
  constructor() {
    this.options = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      autoIndex: false,
      // Don't build indexes
      reconnectTries: Number.MAX_VALUE,
      // Never stop trying to reconnect
      reconnectInterval: 500,
      // Reconnect every 500ms
      poolSize: 10,
      // Maintain up to 10 socket connections
      // If not connected, return errors immediately rather than waiting for reconnect
      bufferMaxEntries: 0,
      connectTimeoutMS: 10000,
      // Give up initial connection after 10 seconds
      socketTimeoutMS: 45000,
      // Close sockets after 45 seconds of inactivity
      family: 4 // Use IPv4, skip trying IPv6

    };
  }
  /**
   *
   * @param key
   * @param value
   */


  set(key, value) {
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


  get(key) {
    if (typeof this.options[key] === 'undefined') {
      throw new Error('the options ' + key + ' not supported');
    }

    return this.options[key];
  }

}

var _default = Options;
exports.default = _default;