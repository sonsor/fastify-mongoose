import Options from './Options';
import * as defaults from './defaults';

class OptionsFactory
{
    static create() {

        // creating options instance
        const options = new Options();

        // setting up default options
        for (const [key, value] of Object.entries(defaults)) {
            options.set(key, value);
        }

        // return the options instance
        return options;
    }
}

export default OptionsFactory;
