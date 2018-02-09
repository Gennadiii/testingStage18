myVar = 'global';

class Es6Class {
  constructor() {
    this.myVar = 'inside ES6 class';
  }

  func() {
    console.log(this.myVar);
  }
}

let es6Instance = new Es6Class();

es6Instance.func();

Promise.resolve()
  // .then(() => es6Instance.func())
  // .then(es6Instance.func)
  // .then(es6Instance.func.bind(es6Instance)) // there's a better way to do it
  .catch(err => console.log(`Something went wrong: ${err}`));
