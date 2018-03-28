function myPromise() {
  return new Promise(resolve => {
    try {
      resolve(24);
    } finally {
      return Promise.resolve(42);
    }
  })
}

myPromise()
  .then(console.log);
