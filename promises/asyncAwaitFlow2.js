const sleep = timeout => new Promise(resolve => setTimeout(_ => {
  console.log(`I've slept ${timeout} ms`);
  resolve(timeout);
}, timeout));

void async function () {
  console.log(`I'm from async function`);
  await sleep(2000);
}()
  .then(_ => console.log(`Log from then`));

void function () {
  console.log(`Sync function`);
}();