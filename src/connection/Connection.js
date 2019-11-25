/**
 *
 */
class Connection
{
    constructor() {
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
    get protocol() {
        return this._protocol;
    }

    /**
     *
     * @param value
     */
    set protocol(value) {
        this._protocol = value;
    }

    /**
     *
     * @return {null}
     */
    get user() {
        return this._user;
    }

    /**
     *
     * @param value
     */
    set user(value) {
        this._user = value;
    }

    /**
     *
     * @return {null}
     */
    get password() {
        return this._password;
    }

    /**
     *
     * @param value
     */
    set password(value) {
        this._password = value;
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
     * @return {Array}
     */
    get options() {
        return this._options;
    }

    /**
     *
     * @param value
     */
    set options(value) {
        this._options = value;
    }

    /**
     *
     * @return {null}
     */
    get name() {
        return this._name;
    }

    /**
     *
     * @param value
     */
    set name(value) {
        this._name = value;
    }

    async connect() {

    }
}
