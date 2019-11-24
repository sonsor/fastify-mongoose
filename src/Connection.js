/**
 *
 */
class Connection
{
    constructor() {
        this._protocol = null;
        this._user = null;
        this._password = null;

        this._hosts = [];
        this._options = [];
    }


    get protocol() {
        return this._protocol;
    }

    set protocol(value) {
        this._protocol = value;
    }

    get user() {
        return this._user;
    }

    set user(value) {
        this._user = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get hosts() {
        return this._hosts;
    }

    set hosts(value) {
        this._hosts = value;
    }

    get options() {
        return this._options;
    }

    set options(value) {
        this._options = value;
    }
}
