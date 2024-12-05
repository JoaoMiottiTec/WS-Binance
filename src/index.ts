import { webSocketStart } from './services/binanceService';
import { log } from './utils/logger';


const main = async () => {
    log('Initialized the application');
    webSocketStart();
};

main().catch((err) => console.error('Error in the application', err));
