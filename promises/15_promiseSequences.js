// Run array of promises one by one

const log = require('../helpers/log.helper').log;
let counter = 0;
const delay = timeout => (log(`Delaying promise ${++counter}`), new Promise(resolve => setTimeout(_ => (log(`Promise ${counter} delayed`), resolve()), timeout || 1000)));

const promises = [delay, delay, delay, delay, delay];


let result = Promise.resolve();
promises.forEach(promise => {
  result = result.then(promise);
});


// promises.reduce((prev, cur) => prev.then(cur), Promise.resolve());
