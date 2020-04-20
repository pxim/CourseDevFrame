const path = require('path');
const merge = require('webpack-merge');
const WriteFilePlugin = require('write-file-webpack-plugin');
const vConsolePlugin = require('vconsole-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new WriteFilePlugin(),
        // new vConsolePlugin({
        //     filter: [],  // 需要过滤的入口文件
        //     enable: true // 发布代码前记得改回 false
        // }),
    ],
    devServer: {
        contentBase: './public',
        // contentBase: path.join(__dirname, "dist"),
        compress: true,
        // index: 'case.html',
        openPage: './index.html',
        port: 8080
        // lazy: true,
    },
    plugins: [
        new WriteFilePlugin()
    ],
    output: {
        // filename: '[name].min.js',
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/')
    },
});