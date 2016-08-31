// Karma configuration
// Generated on Mon Dec 07 2015 17:59:35 GMT+0200 (FLE Standard Time)

module.exports = function(config) {
    'use strict';
    config.set({
        autoWatch: false,
        basePath: '',
        frameworks: ['jasmine', 'browserify'],
        // list of files / patterns to load in the browser
        files: [
            '../app/libs/angular/angular.js',
            '../app/libs/angular-messages/angular-messages.js',
            '../app/libs/jquery/dist/jquery.js',
            '../app/libs/bootstrap/dist/js/bootstrap.js',
            '../app/js/*.js',
            '../app/components/**/*.js',
            '../public/**/*.html',
            './app/**/*-spec.js'
        ],
        // list of files to exclude
        exclude: [
        ],
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '../app/*.js' :               ['browserify'],
            '../app/components/**/*.js' : ['browserify'],
            '../public/**/*.html':        ['ng-html2js']
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'html'],
        port: 9876,
        colors: true,
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'], //'Chrome'
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,
        // Concurrency level
        // how many browser should be started simultanous
        concurrency: Infinity,

        browserify:{
            debug: true
        },

        htmlReporter: {
          outputDir: 'karma_html'
        },

        ngHtml2JsPreprocessor: {
            stripPrefix: '../public/',
            moduleName: 'templates'
        },

        plugins : [
            'karma-chrome-launcher',
            'karma-browserify',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor',
            'karma-html-reporter',
            'karma-spec-reporter'
        ],

        browserNoActivityTimeout: 80000

    })
}
