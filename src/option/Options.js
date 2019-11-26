class Options
{
    /**
     *
     */
    constructor() {
        this._options = new Map();
    }

    get options() {
        return this._options;
    }

    set options(value) {
        this._options = value;
    }

    /**
     *
     * @param key
     * @return {*}
     */
    get(target, key) {
        if (!target.options.has(key)) {
            throw new Error('the options ' + key + ' not supported');
        }

        return target.options.get(key);
    }

    set(target, key, value) {
        target._options.set(key, value);
        return true;
    }

    toArray() {
        return this._options.entries();
    }
}

export default Options;
