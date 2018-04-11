//latentflip.com/loupe/
console.log('1 - SYNC START');
setTimeout(function iAmTheFastest() {
  console.log('5 - I am the fastest async');
}, 1000);
function func1(myVar) {
  return new Promise(function (resolve, reject) {
    console.log('2 - Sync Promise start');
    setTimeout(function thisIsPromise() {
      myVar ? resolve(myVar) : reject(new Error('Rejected'));
    }, 10 * 1000);
    console.log('3 - Sync Promise end');
  });
}
func1("7 - I'm from promise")
  .then(console.log); // remove for loupe
setTimeout(function asyncEnd() {
  console.log('6 - Async end');
}, 2000);
console.log('4 - SYNC END');
