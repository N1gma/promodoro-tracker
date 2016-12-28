var assert = require('assert');
var babelMoreOptions = { presets: 'es2015' };

module.exports = function (config) {
    config.set({
        basePath: '.',
        frameworks: ['mocha','chai','sinon'],
        files: [
            'Global/js/main/*.js',
            'User/user.js',
            'components/**/**/*.js',
            'components/**/*.js',
            'tests/specs/*.js'
        ],
        preprocessors: {
            'components/**/**/*.js': ['babel'],
            'components/**/*.js': ['babel'],
            'tests/specs/*.js': ['babel'],
            'Global/js/main/helpers.js': ['coverage'],
            'Global/js/main/Routes.js': ['coverage'],
            'components/task-list/daily_list/Model.js': ['coverage'],
            'components/task-list/daily_list/Controller.js': ['coverage']
        },
        babelPreprocessor: {
            options: {
                "presets": ["es2015"],
                "plugins": ["transform-es2015-modules-umd"]
            }
        },
        coverageReporter: {
            instrumenters: {isparta: require('isparta')},
            instrumenter: {
                '**/**/*.js': 'isparta',
                '**/*.js': 'isparta'
            },
            instrumenterOptions: {
                isparta: { babel : babelMoreOptions }
            },
            reporters: [
                {
                    type: 'text-summary'
                },
                {
                    type: 'html',
                    dir: 'tests/coverage/'
                }
            ]
        },
        reporters: ['progress', 'coverage'],
        port: 3003,
        colors: true,
        autoWatch: true,
        singleRun: false
    });
};

