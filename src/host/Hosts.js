/**
 *
 */
class Hosts
{
    /**
     *
     */
    constructor() {
        this._hosts = [];
    }

    /**
     *
     * @return {Array}
     */
    get hosts() {
        return this._hosts;
    }

    /**
     *
     * @param value
     */
    set hosts(value) {
        this._hosts = value;
    }

    /**
     *
     * @param host
     */
    add(host) {
        this._hosts.push(host);
    }

    /**
     *
     * @return {string}
     * @private
     */
    __toString() {
        return '';
    }
}

module.exports = Hosts;
