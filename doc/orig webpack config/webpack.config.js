const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    // entry: './src/index.js',
    // another: './src/case/extjs/caseGlobal.js',
    entry: {
        app: './src/index.js',
        print: './src/print.js',
        caseAn: './src/case/caseAn.js',
        case: './src/case/case.js',
        caseGlobal: './src/case/extjs/caseGlobal.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        // contentBase: path.join(__dirname, "dist"),
        compress: true,
        // index: 'case.html',
        openPage: 'case.html',
        port: 8080
        // lazy: true,

    },
    plugins: [
        // new CleanWebpackPlugin(['release']),
        new HtmlWebpackPlugin({
          title: 'Output Management'
        })
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
};