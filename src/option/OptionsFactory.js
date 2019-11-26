import Options from './Options';
import defaults from './defaults';

class OptionsFactory
{
    static create() {

        // creating options instance
        const options = new Options();

        // setting up default options
        for (const [key, value] of defaults) {
            options[key] = value;
        }

        // return the options instance
        return options;
    }
}

export default OptionsFactory;