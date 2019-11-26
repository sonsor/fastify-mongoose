"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _sinonChai = _interopRequireDefault(require("sinon-chai"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai.default.use(require("chai-as-promised"));

_chai.default.use(_sinonChai.default);