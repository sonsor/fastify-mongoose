/**
 *
 */
class Host
{
    a = 10;
    
    /**
     *
     * @param host
     * @param port
     */
    constructor(host, port) {
        this._host = host;
        this._port = port;
    }

    /**
     *
     * @param value
     */
    set host(value) {
        this._host = value;
    }

    /**
     *
     * @param value
     */
    set port(value) {
        this._port = value;
    }

    /**
     *
     * @return {*}
     */
    get host() {
        return this._host;
    }

    /**
     *
     * @return {*}
     */
    get port() {
        return this._port;
    }

    /**
     *
     * @return {string}
     * @private
     */
    __toString() {
        return this._host + ':' + this._port
    }
}

module.exports = Host;
