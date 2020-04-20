const path = require('path');
const merge = require('webpack-merge');
const WriteFilePlugin = require('write-file-webpack-plugin');
const common = require('./webpack.common-czh5-2.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public-czh5',
        // contentBase: path.join(__dirname, "dist"),
        compress: true,
        // index: './h5T_CZ.html',
        // openPage: './../../h5T_CZ.html',
        openPage: './h5T_CZ.html',
        port: 8082
        // lazy: true,
    },
    plugins: [
        new WriteFilePlugin()
    ],
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'public-czh5/')
    },
});
