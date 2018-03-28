void async function () {
  console.log(`I'm from async function`);
}()
  .then(_ => console.log(`Log from then`));

void function () {
  console.log(`Sync function`);
}();