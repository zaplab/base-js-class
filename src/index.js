
import {
    length as zapObjectLength,
} from 'zap-base-js-object';

const removeOn = function removeOn(string) {
    return string.replace(/^on([A-Z])/, (full, first) => {
        return first.toLowerCase();
    });
};

export class ZapClass {
    /**
     * @type {Object}
     */
    static defaultOptions = {};

    /**
     * @type {Object}
     */
    options = {};

    /**
     * @type {Object}
     */
    $events = {};

    /**
     * @access public
     * @param {Object} [options]
     * @returns {ZapClass}
     */
    constructor(options = {}) {
        this.setOptions(options);
    }

    /**
     * @access public
     * @param {Object} options
     * @returns void
     */
    setOptions(options) {
        this.options = Object.assign({}, this.constructor.defaultOptions, options);

        for (const option in this.options) {
            if (this.options.hasOwnProperty(option) && (typeof this.options[option] === 'function') && (/^on[A-Z]/).test(option)) {
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
    addEvent(type, fn) {
        const eventType = removeOn(type);

        if (!this.$events) {
            this.$events = {};
        }

        const events = (this.$events[eventType] || []);

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
    addEvents(events) {
        for (const type in events) {
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
    fireEvent(type, args = []) {
        const eventType = removeOn(type);
        const events = this.$events && this.$events[eventType];

        if (events) {
            events.forEach((fn) => {
                fn(...args);
            });
        }
    }

    /**
     * @access public
     * @param {String} type
     * @param {Function} fn
     * @returns void
     */
    removeEvent(type, fn) {
        const eventType = removeOn(type);
        const events = this.$events[eventType];

        if (events) {
            const index = events.indexOf(fn);

            if (index !== -1) {
                events.splice(index, 1);

                if (!zapObjectLength(this.$events[eventType])) {
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
    removeEvents(events) {
        if (typeof events === 'undefined') {
            const $events = this.$events;

            for (const type in $events) {
                if ($events.hasOwnProperty(type)) {
                    const length = $events[type].length;

                    for (let i = 0; i < length; ++i) {
                        this.removeEvent(type, $events[type][i]);
                    }
                }
            }
        } else {
            for (const type in events) {
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
    destroy() {
        this.removeEvents();
    }
}
