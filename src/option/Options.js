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
    get(key) {
        if (!this._options.has(key)) {
            throw new Error('the options ' + key + ' not supported');
        }

        return this._options.get(key);
    }

    set(key, value) {
        this._options.set(key, value);
    }

    toArray() {
        let obj = {};
        this._options.forEach((v, k) => obj[k] = v)
        return obj;
    }
}

export default Options;
