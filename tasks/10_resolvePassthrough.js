function myPromise() {
  return new Promise(resolve => {
    resolve(1);
  });
}

myPromise()
  .then(console.log(2))
  .then(console.log);