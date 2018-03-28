myVar = 'global';

let obj = {
  myVar: 'inside object',
  func() {
    console.log(this.myVar);
  },
  get func2() {
    let self = this;
    return function () {
      console.log(self.myVar);
    }
  }
};

obj.func();

Promise.resolve()
  // .then(_ => obj.func())
  // .then(obj.func)
  // .then(obj.func2)
  .catch(err => console.log(`Something went wrong: ${err}`));
