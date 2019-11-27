import { createLogger, transports, format } from 'winston';
const { File, Console } = transports;

const logger = createLogger({
    level: 'info',
    format: format.json(),
    transports: [
        new File({ filename: 'error.log', level: 'error' }),
        new File({ filename: 'combined.log' }),
    ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new Console({
        format: format.simple(),
    }));
}

logger.stream = {
    write: (message) => {
        logger.info(message.trim());
    },
};

export default logger;
