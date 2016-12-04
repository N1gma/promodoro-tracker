var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: {
        appJs: ['./components/login/index.js', './components/header/index.js',
            './components/title/index.js', './components/settings/module/index.js',
            './components/settings/module2/index.js', './components/reports/module/index.js',
            './components/header/header-2/index.js', './components/title/titleTaskList/index.js',
            './components/task-list/module/index.js', './components/modals/addtask/index.js',
            './components/modals/editTask/index.js', './components/title/titleTaskListGlobal/index.js',
            './components/task-list/module-2/index.js', './components/timer/index.js'],
        appCss:'./Global/style/main/commonEntry.js',
        addTask: './components/modals/addtask/style/styleEntry.js',
        categories: './components/settings/module2/style/index.js',
        //login: './components/login/style/index.js'

    },
    output: {
        //path:__dirname + '/Global',
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
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {
                test: /\.jade$/,
                loader: "jade-loader"
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file?name=./../[1]&regExp=Global/(.*)'
                //loader: 'file?name=Global/fonts/[name].[ext]&root="."'
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'file?name=[path][name].[ext]'
            }
        ]


    },
    plugins: [
        new ExtractTextPlugin("./Global/style/[name].css"),

    ]
};