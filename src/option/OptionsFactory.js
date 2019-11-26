import Options from './Options';
import defaults from './defaults';

class OptionsFactory
{
    static create() {

        // creating options instance
        let options = new Options();

        options = new Proxy(options, {
            get: options.get,
            set: options.set
        });

        // setting up default options
        for (const [key, value] of Object.entries(defaults)) {
            options[key] = value;
        }

        // return the options instance
        return options;
    }
}

export default OptionsFactory;
