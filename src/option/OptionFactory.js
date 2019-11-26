import Options from './Options';
import defaults from './defaults';

class OptionsFactory
{
    create() {

        // creating options instance
        const options = new Options();

        // settingup default options
        for (let key in defaults) options[key] = defaults[key];

        // return the options instance
        return options;
    }
}

export defaults OptionsFactory;