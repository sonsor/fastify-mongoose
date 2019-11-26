class Options
{
    /**
     *
     */
    constructor() {
        this._options = new Map();
    }

    /**
     *
     * @param key
     * @return {*}
     */
    get [expr]() {
        if (!this._options.has(expr)) {
            throw new Error('the options ' + key + ' not supported');
        }

        return this._options.get(expr);
    }

    set [expr](value) {
        if (!this._options.has(expr)) {
            throw new Error('the options ' + key + ' not supported');
        }
        this._options.set(expr, value);
    }
}

export default Options;
