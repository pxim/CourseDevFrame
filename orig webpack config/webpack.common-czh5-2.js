const path = require('path');
const webpack = require("webpack");
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //引入清除文件插件
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ObsoleteWebpackPlugin = require('obsolete-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const common = require('./webpack.common-com.js');

module.exports = merge(common, {
    mode: 'common',
    entry: {
        // app: './src/index.js',
        'ext/js/menuWidget'             : ['babel-polyfill', './src-czh5/ext/js/pane/menuWidget.js'],
        'ext/js/CZGlobal'               : ['babel-polyfill', './src-czh5/ext/js/CZGlobal.js'],

        'ext/js/scene/czSceneDemountAn' : ['babel-polyfill', './src-czh5/ext/js/scene/czSceneDemountAn.js'],
        'ext/js/scene/czSceneInstallAn' : ['babel-polyfill', './src-czh5/ext/js/scene/czSceneInstallAn.js']
    },
});

