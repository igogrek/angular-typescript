var webpackConfig = require('./webpack.config');
delete webpackConfig.entry;

module.exports = function(config) {
    config.set({
        files: [
            'karma.tests.js'
        ],
        preprocessors: {
            'karma.tests.js': ['webpack', 'sourcemap'],
        },
        frameworks: ['jasmine'],
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: {
                colors: true
            },
            noInfo: true
        },
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};