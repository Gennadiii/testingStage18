function myPromise() {
  try {
    return new Promise(resolve => {
      resolve(24);
    });
  } finally {
    return Promise.resolve(42);
  }
}

myPromise()
  .then(console.log);
