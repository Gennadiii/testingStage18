const sleep = timeout => new Promise(resolve => setTimeout(_ => {
  console.log(`1 - I've slept ${timeout} ms`);
  resolve(timeout);
}, timeout));

(async function () {
  await sleep(2000);
  console.log(`2 - I'm from async function`);
})()
  .then(_ => console.log(`3 - Log from then`));

void function () {
  console.log(`4 - Sync function`);
}();