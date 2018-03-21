// Run array of promises one by one

const log = require('../helpers/log.helper').log;
let counter = 0;
const delay = timeout => (log(`Delaying promise ${++counter}`), new Promise(resolve => setTimeout(_ => (log(`Promise ${counter} delayed`), resolve()), timeout || 1000)));

const promises = [delay, delay, delay, delay, delay];


let result = Promise.resolve();
Promise.all(promises.map(promise => {
  return result = result.then(promise);
}));


// return promises.reduce((prev, cur) => prev.then(cur), Promise.resolve());
