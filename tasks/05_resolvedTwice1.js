const myVar = true;

function myPromise() {
  return new Promise(resolve => {
    resolve(1);
    myVar && resolve(2);
  })
}

myPromise()
  .then(console.log);
