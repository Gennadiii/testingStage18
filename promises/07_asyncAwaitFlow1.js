(async function () {
  console.log(`1 - I'm from async function`);
})()
  .then(_ => console.log(`2 - Log from then`));

void function () {
  console.log(`3 - Sync function`);
}();