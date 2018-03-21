const log = require('../../helpers/log.helper').log;

const firstField = element(by.model('first')),
  secondField = element(by.model('second')),
  goButton = element(by.id('gobutton')),
  lastResult = element(by.binding('latest'));


function openSite(site) {
  browser.get(site);
}

function enterDigit(num, field) {
  log(`Entering digit ${num}`);
  field.sendKeys(num);
  browser.sleep(1000);
}

function clickGoButton() {
  log(`Clicking go button`);
  goButton.click();
}

async function allPromisesTrue(arr) {
  const resolvedPromisesArr = await Promise.all(arr);
  return resolvedPromisesArr.every(promise => promise === true);
}

const delay = timeout => (log('Delaying promise'), new Promise(resolve => setTimeout(_ => (log('Promise delayed'), resolve()), timeout || 1000)));


describe('Promises mistakes', function () {

  beforeEach(function () {
    openSite('http://juliemr.github.io/protractor-demo/');
  });


  describe('Example 1: Return', function () {

    it(`Forget to return a value`, function () {

      const users = [{id: 1, name: 'John Doe'}];
      const getUserNameSync = id => users.find(user => user.id === id).name;

      Promise.resolve()
        .then(_ => {
          getUserNameSync(1);
        })
        .then(userName => expect(userName).toEqual('John Doe'));

    });

    it(`Return promise`, function () {

      const users = [{id: 1, name: 'John Doe'}];
      const getUserNameAsync = id => Promise.resolve(users.find(user => user.id === id).name);

      Promise.resolve()
        .then(_ => {
          return getUserNameAsync(1);
        })
        .then(userName => expect(userName).toEqual('John Doe'));

    });

  });


  describe('Example 2: Forget to catch', function () {

    it(`Example 1`, function () {

      const users = [{id: 1, name: 'John Doe'}];
      const getUserNameSync = id => users.find(user => user.id === id).name;

      Promise.resolve()
        .then(_ => {
          conslole.log(getUserNameSync(1));
        })
        .then(userName => expect(userName).toEqual('John Doe'));

    });

    it(`Example 2`, function () {

      const users = [{id: 1, name: 'John Doe'}];
      const getUserNameSync = id => users.find(user => user.id === id).name;

      Promise.resolve()
        .then(_ => {
          conslole.log(getUserNameSync(1));
        })
        .then(userName => expect(userName).toEqual('John Doe'))
        .catch(error => expect(error).toBe(null));

    });
  });


  describe('Example 3: Promise chain', function () {

    it(`Don't forget to chain promises 1`, function () {

      enterDigit(40, firstField);
      enterDigit(2, secondField);

      if (!lastResult.isPresent()) {
        clickGoButton();
      }

      expect(lastResult.getText()).toEqual('42');

    });

    it(`Don't forget to chain promises 2`, function () {

      enterDigit(40, firstField);
      enterDigit(2, secondField);

      lastResult.isPresent()
        .then(lastResultIsPresent => {
          if (!lastResultIsPresent) {
            clickGoButton();
            expect(lastResult.getText()).toEqual('42');
          }

        });

    });
  });


  describe('Example 4: Array of promises', function () {

    it('Example 1', function () {

      let arrayOfPromises = [];
      element.all(by.css('input')).count()
        .then(count => arrayOfPromises.push(count > 0));
      expect(allPromisesTrue(arrayOfPromises)).toEqual(true);

    });

    it('Example 2', function () {

      let arrayOfPromises = [];
      element.all(by.css('wrong locator')).count()
        .then(count => arrayOfPromises.push(count > 0));
      expect(allPromisesTrue(arrayOfPromises)).toEqual(true);

    });

    it('Example 3', function () {

      let arrayOfPromises = [];
      return element.all(by.css('wrong locator')).count()
        .then(count => arrayOfPromises.push(count > 0))
        .then(_ => expect(allPromisesTrue(arrayOfPromises)).toEqual(true));

    });

    it('Example 4', function () {

      let arrayOfPromises = [];
      return element.all(by.css('input')).count()
        .then(count => arrayOfPromises.push(count > 0))
        .then(_ => expect(allPromisesTrue(arrayOfPromises)).toEqual(true));

    });
  });


  describe('Example 5: Promises iterations', function () {

    it('Example 1', function () {

      let fields = [firstField, secondField];


      element.all(by.css('input')).count()
        .then(_ => {
          fields.forEach((field, index) => {
            enterDigit(index, field);
          });
        })
        .then(clickGoButton)
        .then(expect(lastResult.getText()).toEqual('1'))
        .catch(console.log);

    });

    it('Example 2', function () {

      const arr = [];
      const pushToArrAsync = num => delay(5000).then(_ => arr.push(num));

      return Promise.resolve()
        .then(_ => {
          [1, 2].forEach(pushToArrAsync);
        })
        .then(_ => expect(arr.length).toEqual(2))
        .catch(console.log);

    });

    it('Example 3', function () {

      const arr = [];
      const pushToArrAsync = num => delay(5000).then(_ => arr.push(num));

      return Promise.resolve()
        .then(_ => Promise.all([1, 2].map(pushToArrAsync)))
        .then(_ => expect(arr.length).toEqual(2))
        .catch(console.log);

    });

    it('Example 4', function () {

      let fields = [firstField, secondField];

      element.all(by.css('input')).count()
        .then(count => count > 0)
        .then(_ => Promise.all(
          fields.map(
            (field, index) => enterDigit(index, field))))
        .then(clickGoButton)
        .then(expect(lastResult.getText()).toEqual('1'))
        .catch(console.log);

    });
  });


  describe('Example 6: Cannot read property \'then\' of undefined', function () {

    it('Example 1', function () {

      function enterDigitsAndGetResult() {
        enterDigit(40, firstField);
        enterDigit(2, secondField);
        clickGoButton();
        lastResult.getText()
          .then(text => {
            return text === '42';
          });
      }

      enterDigitsAndGetResult()
        .then(result => expect(result).toBe(true));

    });

    it('Example 2', function () {

      function enterDigitsAndGetResult() {
        enterDigit(40, firstField);
        enterDigit(2, secondField);
        clickGoButton();
        return lastResult.getText()
          .then(text => {
            return text === '42';
          });
      }

      enterDigitsAndGetResult()
        .then(result => expect(result).toBe(true));

    });
  });

});
