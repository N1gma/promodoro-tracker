var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");


module.exports = {
    entry: {
        vendors: ['jquery','./services/jquery-ui.min.js','./services/vendors.entry.js','./services/firebase.js'],
        commonBundle: ['./Global/js/main/GlobalView.js', './Global/js/main/helpers.js','./Global/js/main/renderBus.js',
            './Global/js/main/user.js','./Global/js/main/eBusLocalTasks.js','./Global/js/main/eBusLocalTimer.js','./Global/js/main/Routes.js',
            './services/plugins.js','./services/notifications.js','./services/pingservice.js',
            './services/login/loginControler.js','./services/validator.js'],
        componentsBundle: ['./components/login/index.js', './components/header/header-global/index.js',
            './components/title/index.js', './components/settings/settings_pomodoros/index.js',
            './components/settings/settings_categories/index.js', './components/reports/index.js',
            './components/header/header-task-list/index.js', './components/title/titleTaskList/index.js',
            './components/task-list/daily_list/index.js', './components/modals/addtask/index.js',
            './components/modals/editTask/index.js', './components/title/titleTaskListGlobal/index.js',
            './components/task-list/global_list/index.js', './components/timer/index.js',
            './components/notifications/index.js','./components/modals/spinner/index.js'],
        style:'./Global/style/main/stylesEntry.js'
    },
    output: {
        //path:__dirname + '/Global',
        filename: './dist/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("css-loader!less-loader")
            },
            {
                test: /\.jade$/,
                loader: "jade-loader",
                publicPath: "../"
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file?name=./Global/fonts/[name]/[name].[ext]'
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'file?name=./Global/img/[name].[ext]?sourceMap'
            }
        ],
        preLoaders: [
            {
                test: /\.js$/,
                exclude: [/\.min\.js$/, /node_modules/],
                loader: "jshint-loader"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("./dist/style.css"),
        new webpack.optimize.CommonsChunkPlugin("vendors", "./dist/vendors.js"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true
            },
            mangle: true
        })
    ],
    jshint: {
        camelcase: true,
        curly: true,
        eqeqeq: true,
        emitErrors: false,
        failOnHint: false,
        esversion: 6
    }
};