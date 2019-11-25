'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Connection = require('./Connection');

var _Connection2 = _interopRequireDefault(_Connection);

var _host = require('../host');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConnectionFactory = function () {
    function ConnectionFactory() {
        _classCallCheck(this, ConnectionFactory);
    }

    _createClass(ConnectionFactory, null, [{
        key: 'create',
        value: function create() {
            var hosts = new _host.Hosts();
            var connection = new _Connection2.default();
            connection.hosts = hosts;
            connection.protocol = 'mongodb';
            return connection;
        }
    }]);

    return ConnectionFactory;
}();

exports.default = ConnectionFactory;