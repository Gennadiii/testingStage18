const log = require('../helpers/log.helper').log;


function delay(timeout = 1000) {
    log('Delaying with a promise');
    // your code here
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

delay()
    .then(_ => log('After delay'));

Promise.resolve('Another promise')
    .then(log);
