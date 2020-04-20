const path = require('path');
const merge = require('webpack-merge');
const WriteFilePlugin = require('write-file-webpack-plugin');
const common = require('./webpack.common-zdh5.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public-zdh5',
        // contentBase: path.join(__dirname, "dist"),
        compress: true,
        // index: './h5T_CZ.html',
        // openPage: './../../h5T_CZ.html',
        openPage: './index.html',
        port: 8081
        // lazy: true,
    },
    plugins: [
        new WriteFilePlugin()
    ],
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'public-zdh5/')
    },
});
