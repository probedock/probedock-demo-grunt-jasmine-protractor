'use strict';

describe('Operation @probedock(contributor=laurent.prevost@probedock.io ticket=calculator)', function () {
  beforeEach(function() {
    browser.get('/index.html');
  });

  it ('the main page should have a default operation @probedock(tag=default)', function() {
    var operation = element(by.model('calculator.operation'));

    expect(operation.isPresent()).toBe(true);
    operation.getAttribute('value').then(function(value) {
      expect(JSON.parse(value)).toEqual({
        op: "add",
        left: {
          op: "add",
          left: 4,
          right: 4
        },
        right: 2
      });
    });
  });

  it ('with the default proposed operation the result should be 10 @probedock(tag=default)', function() {
    var button = element(by.id('process'));

    expect(button.isPresent()).toBe(true);

    button.click();

    var result = element(by.id('result'));

    result.getText().then(function(text) {
      expect(text).toEqual('10');
    });
  });

  it ('should be possible to set a custom basic operation: 2 + 4 = 6 @probedock(tag=operation tag=basic)', function() {
    var operation = element(by.model('calculator.operation'));

    operation.clear().sendKeys(JSON.stringify({
      op: 'add',
      left: 2,
      right: 4
    }, null, 2));

    element(by.id('process')).click();

    var result = element(by.id('result'));

    result.getText().then(function(text) {
      expect(text).toEqual('6');
    })
  });

  it ('should be possible to set a custom complex operation: 2 + (20 - (3 * (10 / 2))) = 7 @probedock(tag=operation tag=complex)', function() {
    var operation = element(by.model('calculator.operation'));

    operation.clear().sendKeys(JSON.stringify({
      op: 'add',
      left: 2,
      right: {
        op: 'sub',
        left: 20,
        right: {
          op: 'mul',
          left: 3,
          right: {
            op: 'div',
            left: 10,
            right: 2
          }
        }
      }
    }, null, 2));

    element(by.id('process')).click();

    var result = element(by.id('result'));

    result.getText().then(function(text) {
      expect(text).toEqual('7');
    })
  });
});
