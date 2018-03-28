myVar = 'global';

function OldClass() {
  this.myVar = 'inside old class';
}

OldClass.prototype.func = function () {
  console.log(this.myVar);
};
let oldClassInstance = new OldClass();

oldClassInstance.func();

Promise.resolve()
  // .then(() => oldClassInstance.func())
  // .then(oldClassInstance.func)
  .catch(err => console.log(`Something went wrong: ${err}`));
