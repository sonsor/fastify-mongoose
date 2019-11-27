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
    toString() {
        let hosts = [];
        this._hosts.forEach((host) => {
            hosts.push(host.toString());
        })
        return hosts.join(',');
    }
}

export default Hosts;
