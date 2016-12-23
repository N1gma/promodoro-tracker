module.exports = function(config) {
    config.set({
        basePath: '.',
        frameworks: ['mocha','chai','sinon'],
        files: [
            'Global/js/main/*.js',
            'User/user.js',
            'components/**/**/*.js',
            'components/**/*.js',
            'services/notifications.js',
            'tests/specs/*.js'
        ],
        exclude: [],
        preprocessors: {
            'components/**/**/*.js' :['babel'],
            'components/**/*.js':['babel'],
            'tests/specs/*.js':['babel'],
            'Global/js/main/helpers.js': ['coverage'],
            'Global/js/main/Routes.js': ['coverage'],
            'services/notifications.js': ['coverage'],
            'components/task-list/daily_list/Model.js':['babel','coverage']
        },
        babelPreprocessor: {
            options: {
                "presets": ["es2015"],
                "plugins": ["transform-es2015-modules-umd"]
            }
        },
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            type : 'html',
            dir : 'tests/coverage/'
        },
        port: 3003,
        colors: true,
        autoWatch: true,
        singleRun: false,
        concurrency: Infinity
    });
};