var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: {
        testJs: './testt.js'
    },
    output: {
        filename: './dist[name].js'
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
                test: /\.less$/,
                loader: "css-loader!less-loader"
            }
        ]

    }
};