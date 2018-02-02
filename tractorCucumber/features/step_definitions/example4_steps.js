// let {setDefaultTimeout} = require('cucumber');
// setDefaultTimeout(60 * 1000);
// const {Given, When, Then} = require('cucumber');
// let chai = require('chai');
// let chaiAsPromised = require('chai-as-promised');
// chai.use(chaiAsPromised);
// let expect = chai.expect;
//
//
// const firstField = element(by.model('first')),
//     secondField = element(by.model('second')),
//     goButton = element(by.id('gobutton')),
//     lastResult = element(by.binding('latest'));
//
//
// function openSite(site) {
//     return browser.get(site);
// }
//
// function enterDigit(num, field) {
//     field.sendKeys(num);
//     return browser.sleep(2000);
// }
//
// function clickGoButton() {
//     return goButton.click();
// }
//
//
// Given(/^Assertions work fine$/, function () {
//     console.log('Checking assertions');
//     expect(true).to.equal(true);
//     // expect(true).to.equal(false);
// });
//
// Given(/^Open site$/, function () {
//     console.log('Opening site');
//     return openSite('http://juliemr.github.io/protractor-demo/');
// });
//
// When(/^Enter digit "(\d*)" to "(first|second)" field$/, function (num, field) {
//     console.log(`Entering digit ${num}`);
//     field = field === 'first'
//         ? firstField
//         : secondField;
//     return enterDigit(num, field);
// });
//
// When(/^Click go button$/, function () {
//     console.log('Clicking go button');
//     return clickGoButton();
// });
//
// Then(/^Last result is "(\d*)"$/, function (num) {
//     console.log(`Checking if result is ${num}`);
//     return expect(lastResult.getText()).to.eventually.equal(num);
// });