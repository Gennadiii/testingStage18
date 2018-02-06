const fs = require('fs');
const {promise} = require('selenium-webdriver');
const process = require('process');

process.env.SELENIUM_PROMISE_MANAGER = 0;

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

    it('adds to values1', function () {

      enterDigit(40, firstField);
      enterDigit(2, secondField);

      clickGoButton();

      expect(lastResult.getText()).toEqual('42');

    });

    it('adds to values2', function () {

      enterDigit(40, firstField);
      enterDigit(2, secondField);

      clickGoButton();

      expect(lastResult.getText()).toEqual('42');

    });
  });

  describe('Example 2', function () {

    it('adds to values3', function () {

      enterDigit(40, firstField);
      enterDigit(2, secondField);

      clickGoButton();

      expect(lastResult.getText()).toEqual('42');

      console.log('The test ended');

    });

    it('adds to values4', function () {

      enterDigit(40, firstField);
      enterDigit(2, secondField);

      clickGoButton();

      expect(lastResult.getText()).toEqual('42');

      Promise.resolve()
        .then(_ => console.log('The test ended'));

    });

    it('adds to values5', function () {

      enterDigit(40, firstField);
      enterDigit(2, secondField);

      clickGoButton();

      expect(lastResult.getText()).toEqual('42');

      protractor.promise.fulfilled()
        .then(_ => console.log('The test ended'));

    });

  });

});