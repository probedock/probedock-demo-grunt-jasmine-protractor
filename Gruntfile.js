'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    probedockSetup: {
      all: {}
    },

    probedockPublish: {
      all: {}
    },

    protractor: {
      options: {
        configFile: 'protractor.conf.js',
        keepAlive: true,
        webdriverManagerUpdate: true
      },
      all: {}
    }
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('probedock-grunt');
  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.registerTask('test', ['probedockSetup', 'protractor', 'probedockPublish']);
  grunt.registerTask('default', ['test']);
};
