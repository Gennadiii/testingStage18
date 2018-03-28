console.log(1);

let promise = new Promise(resolve => {
  console.log(2);
  resolve(3);
});

promise.then(console.log);

console.log(4);