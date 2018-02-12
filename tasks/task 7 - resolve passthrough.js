function myPromise() {
  return new Promise(resolve => {
    resolve('Resolved');
  });
}

myPromise()
  .then(console.log(`Your ad may be here`))
  .then(console.log);