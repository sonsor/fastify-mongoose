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
    const options = new _Options.default(); // settingup default options

    for (const [key, value] of _defaults.default) {
      options[key] = value;
    } // return the options instance


    return options;
  }

}

var _default = OptionsFactory;
exports.default = _default;