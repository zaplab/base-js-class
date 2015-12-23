'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ZapClass = undefined;

var _zapBaseJsObject = require('zap-base-js-object');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var removeOn = function removeOn(string) {
    return string.replace(/^on([A-Z])/, function (full, first) {
        return first.toLowerCase();
    });
};

var ZapClass = exports.ZapClass = (function () {

    /**
     * @access public
     * @param {Object} [options]
     * @returns {ZapClass}
     */

    /**
     * @type {Object}
     */

    function ZapClass() {
        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, ZapClass);

        this.options = {};
        this.$events = {};

        this.setOptions(options);
    }

    /**
     * @access public
     * @param {Object} options
     * @returns void
     */

    /**
     * @type {Object}
     */

    /**
     * @type {Object}
     */

    _createClass(ZapClass, [{
        key: 'setOptions',
        value: function setOptions(options) {
            this.options = _extends({}, this.constructor.defaultOptions, options);

            for (var option in this.options) {
                if (this.options.hasOwnProperty(option) && typeof this.options[option] === 'function' && /^on[A-Z]/.test(option)) {
                    this.addEvent(removeOn(option), this.options[option]);
                    delete this.options[option];
                }
            }
        }

        /**
         * @access public
         * @param {String} type
         * @param {Function} fn
         * @returns void
         */

    }, {
        key: 'addEvent',
        value: function addEvent(type, fn) {
            var eventType = removeOn(type);

            if (!this.$events) {
                this.$events = {};
            }

            var events = this.$events[eventType] || [];

            if (events.indexOf(fn) === -1) {
                events.push(fn);
                this.$events[eventType] = events;
            }
        }

        /**
         * @access public
         * @param {Object} events
         * @returns void
         */

    }, {
        key: 'addEvents',
        value: function addEvents(events) {
            for (var type in events) {
                if (events.hasOwnProperty(type)) {
                    this.addEvent(removeOn(type), events[type]);
                }
            }
        }

        /**
         * @access public
         * @param {String} type
         * @param {Array} args
         * @returns void
         */

    }, {
        key: 'fireEvent',
        value: function fireEvent(type) {
            var args = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

            var eventType = removeOn(type);
            var events = this.$events && this.$events[eventType];

            if (events) {
                events.forEach(function (fn) {
                    fn.apply(undefined, _toConsumableArray(args));
                });
            }
        }

        /**
         * @access public
         * @param {String} type
         * @param {Function} fn
         * @returns void
         */

    }, {
        key: 'removeEvent',
        value: function removeEvent(type, fn) {
            var eventType = removeOn(type);
            var events = this.$events[eventType];

            if (events) {
                var index = events.indexOf(fn);

                if (index !== -1) {
                    events.splice(index, 1);

                    if (!(0, _zapBaseJsObject.length)(this.$events[eventType])) {
                        delete this.$events[eventType];
                    }
                }
            }
        }

        /**
         * @access public
         * @param {Object} [events]
         * @returns void
         */

    }, {
        key: 'removeEvents',
        value: function removeEvents(events) {
            if (typeof events === 'undefined') {
                var $events = this.$events;

                for (var type in $events) {
                    if ($events.hasOwnProperty(type)) {
                        var length = $events[type].length;

                        for (var i = 0; i < length; ++i) {
                            this.removeEvent(type, $events[type][i]);
                        }
                    }
                }
            } else {
                for (var type in events) {
                    if (events.hasOwnProperty(type)) {
                        this.removeEvent(type, events[type]);
                    }
                }
            }
        }

        /**
         * @access public
         * @returns void
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.removeEvents();
        }
    }]);

    return ZapClass;
})();

ZapClass.defaultOptions = {};