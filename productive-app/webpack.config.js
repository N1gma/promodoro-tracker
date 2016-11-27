module.exports = {
    entry: ['./components/login/index.js','./components/header/index.js' ,
        './components/title/index.js','./components/settings/module/index.js',
        './components/settings/module2/index.js','./components/reports/module/index.js',
    './components/header/header-2/index.js','./components/title/titleTaskList/index.js',
    './components/task-list/module/index.js','./components/modals/addtask/index.js',
        './components/modals/editTask/index.js','./components/title/titleTaskListGlobal/index.js',
    './components/task-list/module-2/index.js','./components/timer/index.js'],
    output: {
        filename: './Global/js/app.js'
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
                test:  /\.css$/,
                loader: 'style!css'
            },
            {
                test:  /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                loader: 'file-loader?name=[path][name].[ext]'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.jade$/,
                loader: "jade-loader"
            }
        ]


    }
};