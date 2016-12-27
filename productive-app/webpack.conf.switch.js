const webpack = require("webpack");

switch (process.env.NODE_ENV) {
    case 'prod':
    case 'production':
        module.exports = require('./webpack.prod.config');
        break;
    case 'dev':
    case 'development':
    default:
        module.exports = require('./webpack.dev.config');
}
//NODE_ENV='prod' webpack;