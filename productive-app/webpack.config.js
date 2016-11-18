module.exports = {
    entry: './components/login/index.js',
    output: {
        filename: './components/login/loginModule.js'
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