const log = require('../helpers/log.helper').log;


function delay(timeout = 1000) {
  log('Delaying with a promise');
  // your code here
}

delay()
  .then(_ => log('After delay'));

Promise.resolve('Another promise')
  .then(log);
