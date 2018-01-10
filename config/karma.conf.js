module.exports = function(config) {

    const testWebpackConfig = require('./webpack.test.js');

    config.set({
        basePath: '',
        plugins: [
            'karma-jasmine',
            'karma-mocha-reporter',
            'karma-chrome-launcher',
            'karma-sourcemap-loader',
            'karma-webpack',
            'karma-jasmine-html-reporter'
        ],
        frameworks: ['jasmine'],
        exclude: [],
        files: [{
            pattern: './config/karma-shim.js',
            watched: false
        }],
        preprocessors: {
            './config/karma-shim.js': ['webpack', 'sourcemap']
        },
        webpack: testWebpackConfig,
        webpackMiddleware: { stats: 'errors-only' },
        reporters: ['mocha', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadless'],
        singleRun: true
    });
};