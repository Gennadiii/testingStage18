const firstField = element(by.model('first')),
  secondField = element(by.model('second')),
  goButton = element(by.id('gobutton')),
  lastResult = element(by.binding('latest'));


function openSite(site) {
  browser.get(site);
}

function enterDigit(num, field) {
  field.sendKeys(num);
  browser.sleep(1000);
}

function clickGoButton() {
  goButton.click();
}


describe('Protractor Demo App', function () {

  beforeEach(function () {
    openSite('http://juliemr.github.io/protractor-demo/');
  });

  describe('Example 1', function () {

    it('adds two values 1', function () {

      enterDigit(40, firstField);
      enterDigit(2, secondField);

      clickGoButton();

      expect(lastResult.getText()).toEqual('42');

    });
  });

  describe('Example 2', function () {

    it('adds two values 2', function () {

      enterDigit(40, firstField);
      enterDigit(2, secondField);

      clickGoButton();

      expect(lastResult.getText()).toEqual('42');

      console.log('The test ended');

    });

    it('adds two values 3', function () {

      enterDigit(40, firstField);
      enterDigit(2, secondField);

      clickGoButton();

      expect(lastResult.getText()).toEqual('42');

      Promise.resolve()
        .then(_ => console.log('The test ended'));

    });

    it('adds two values4 ', function () {

      enterDigit(40, firstField);
      enterDigit(2, secondField);

      clickGoButton();

      expect(lastResult.getText()).toEqual('42');

      protractor.promise.fulfilled()
        .then(_ => console.log('The test ended'));

    });

  });


  describe('Example 3', function () {

    it(`can't catch`, function () {

      const notExistingElement = element(by.id('42'));

      function elementNotDisplayed(el) {
        return el.isDisplayed()
          .thenCatch(_ => true);
      }

      expect(elementNotDisplayed(notExistingElement)).toBe(true)
    });

    it(`can catch in then`, function () {

      const notExistingElement = element(by.id('42'));

      function elementNotDisplayed(el) {
        return el.isDisplayed()
          .then(null, _ => true);
      }

      expect(elementNotDisplayed(notExistingElement)).toBe(true)
    });

    it(`can catch after then`, function () {

      const notExistingElement = element(by.id('42'));

      function elementNotDisplayed(el) {
        return el.isDisplayed()
          .then(isDisplayed => !isDisplayed)
          .thenCatch(_ => true);
      }

      expect(elementNotDisplayed(notExistingElement)).toBe(true)
    });
  });

});