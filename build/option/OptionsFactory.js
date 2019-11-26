"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Options = _interopRequireDefault(require("./Options"));

var _defaults = _interopRequireDefault(require("./defaults"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class OptionsFactory {
  static create() {
    // creating options instance
    const options = new _Options.default(); // setting up default options

    for (const [key, value] of Object.entries(_defaults.default)) {
      options.set(key, value);
    } // return the options instance


    return options;
  }

}

var _default = OptionsFactory;
exports.default = _default;