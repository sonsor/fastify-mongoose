"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 */
var Connection = function () {
    function Connection() {
        _classCallCheck(this, Connection);

        this._protocol = null;
        this._user = null;
        this._password = null;
        this._name = null;

        this._hosts = [];
        this._options = [];
    }

    /**
     *
     * @return {null}
     */


    _createClass(Connection, [{
        key: "connect",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function connect() {
                return _ref.apply(this, arguments);
            }

            return connect;
        }()
    }, {
        key: "protocol",
        get: function get() {
            return this._protocol;
        }

        /**
         *
         * @param value
         */
        ,
        set: function set(value) {
            this._protocol = value;
        }

        /**
         *
         * @return {null}
         */

    }, {
        key: "user",
        get: function get() {
            return this._user;
        }

        /**
         *
         * @param value
         */
        ,
        set: function set(value) {
            this._user = value;
        }

        /**
         *
         * @return {null}
         */

    }, {
        key: "password",
        get: function get() {
            return this._password;
        }

        /**
         *
         * @param value
         */
        ,
        set: function set(value) {
            this._password = value;
        }

        /**
         *
         * @return {Array}
         */

    }, {
        key: "hosts",
        get: function get() {
            return this._hosts;
        }

        /**
         *
         * @param value
         */
        ,
        set: function set(value) {
            this._hosts = value;
        }

        /**
         *
         * @return {Array}
         */

    }, {
        key: "options",
        get: function get() {
            return this._options;
        }

        /**
         *
         * @param value
         */
        ,
        set: function set(value) {
            this._options = value;
        }

        /**
         *
         * @return {null}
         */

    }, {
        key: "name",
        get: function get() {
            return this._name;
        }

        /**
         *
         * @param value
         */
        ,
        set: function set(value) {
            this._name = value;
        }
    }]);

    return Connection;
}();

exports.default = Connection;