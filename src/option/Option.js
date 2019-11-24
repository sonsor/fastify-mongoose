/**
 *
 */
class Option
{
    /**
     *
     * @param key
     * @param value
     */
    constructor(key, value) {
        this._key = key;
        this._value = value
    }

    /**
     *
     * @return {*}
     */
    get key() {
        return this._key;
    }

    /**
     *
     * @param value
     */
    set key(value) {
        this._key = value;
    }

    /**
     *
     * @return {*}
     */
    get value() {
        return this._value;
    }

    /**
     *
     * @param value
     */
    set value(value) {
        this._value = value;
    }
}

module.exports = Option;
