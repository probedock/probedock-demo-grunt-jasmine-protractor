// Load the Probe Dock reporter.
var ProbeDockReporter = require('probedock-grunt-jasmine');

exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e/**/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8080',

  // The jasmine framework is required.
  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  // Add the Probe Dock reporter to the jasmine environment.
  onPrepare: function() {
    require('./app.js');

    jasmine.getEnv().addReporter(new ProbeDockReporter({
      // custom Probe Dock configuration
      config: {
        project: {
          category: 'Protractor'
        }
      }
    }));
  }
};
