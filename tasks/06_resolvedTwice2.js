function myPromise() {
  return new Promise(resolve => {
    resolve(1);
    return Promise.resolve(2);
  })
}

myPromise()
  .then(console.log);
