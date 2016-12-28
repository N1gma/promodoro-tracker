var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: {
        vendors:['./services/vendors.entry.js','./services/firebase.js'],
        commonBundle:['./Global/js/main/GlobalView.js', './Global/js/main/helpers.js','./Global/js/main/renderBus.js',
            './User/user.js','./Global/js/main/eBusLocalTasks.js','./Global/js/main/Routes.js',
            './services/plugins/index.js','./services/notifications.js','./services/pingservice.js',
            './services/login/loginControler.js'],
        componentsBundle: ['./components/login/index.js', './components/header/index.js',
            './components/title/index.js', './components/settings/settings_pomodoros/index.js',
            './components/settings/settings_categories/index.js', './components/reports/module/index.js',
            './components/header/header-2/index.js', './components/title/titleTaskList/index.js',
            './components/task-list/daily_list/index.js', './components/modals/addtask/index.js',
            './components/modals/editTask/index.js', './components/title/titleTaskListGlobal/index.js',
            './components/task-list/global_list/index.js', './components/timer/index.js',
            './components/notifications/index.js'],
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
                loader: "jade-loader"
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file?publicPath=../../&name=[path][name].[ext]'
                //loader: 'file?name=Global/fonts/[name].[ext]&root="."'
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'file?name=[path][name].[ext]'
            }
        ],
        preLoaders: [

        ]

    },
    plugins: [
        new ExtractTextPlugin("./dist/style.css")
    ]
};