var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: {
        appJs: [
            './services/notification.js','./services/firebase.js','./services/plugins/index.js',
            './services/pingservice.js','./User/user.js','./Global/js/main/helpers.js',
            './components/login/index.js', './components/header/index.js',
            './components/title/index.js', './components/settings/settings_pomodoros/index.js',
            './components/settings/settings_categories/index.js', './components/reports/module/index.js',
            './components/header/header-2/index.js', './components/title/titleTaskList/index.js',
            './components/task-list/daily_list/index.js', './components/modals/addtask/index.js',
            './components/modals/editTask/index.js', './components/title/titleTaskListGlobal/index.js',
            './components/task-list/global_list/index.js', './components/timer/index.js',
            './components/notifications/index.js'],
        appCss:'./Global/style/main/commonEntry.js',
        addTask: './components/modals/addtask/style/styleEntry.js',
        categories: './components/settings/settings_categories/style/index.js'
    },
    output: {
        //path:'./dist',
        filename: './Global/js/[name].js',
        chunkFilename: "./Global/js/[id].js"
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
        new ExtractTextPlugin("./Global/style/[name].css")
    ]
};