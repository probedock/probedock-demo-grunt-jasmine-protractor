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

  it ('should be possible to set a custom basic operation (2 + 4) @probedock(tag=operation)', function() {
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
});
