(function () {
    'use strict';

    module.exports = {
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            // 3rd party resources
            // None
            // source files
            'dist/vireo*.js',
            'source/core/module_*.js',
            'source/io/module_*.js',
            'source/core/vireo*.loader.js',
            // test assets
            'test-it/karma/utilities/testHelpers.*.js',
            {
                pattern: 'test-it/*.via',
                included: false
            },
            {
                pattern: 'test-it/results/*.vtr',
                included: false
            },
            {
                pattern: 'test-it/karma/fixtures/**/*.*',
                included: false
            }
        ],

        // list of files to exclude
        exclude: [
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['dots', 'kjhtml'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // How long will Karma wait for a message from a browser before disconnecting from it (in ms).
        // default: 10000
        browserNoActivityTimeout: 60000,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: 1
    };
}());