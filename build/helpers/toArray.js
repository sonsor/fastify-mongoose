"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const toArray = value => {
  if (!Array.isArray(value)) {
    value = [value];
  }

  return value;
};

var _default = toArray;
exports.default = _default;