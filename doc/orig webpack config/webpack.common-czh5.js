const path = require('path');
const webpack = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //引入清除文件插件
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ObsoleteWebpackPlugin = require('obsolete-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');


module.exports = {
    mode: 'none', // 设置环境变量，优先级最高 'production' 自动压缩代码 | 'development' | 'none'
    entry: {
        // app: './src/index.js',
        'ext/js/menuWidget'             : ['babel-polyfill', './src-czh5/ext/js/pane/menuWidget.js'],
        'ext/js/CZGlobal'               : ['babel-polyfill', './src-czh5/ext/js/CZGlobal.js'],

        'ext/js/scene/czSceneDemountAn' : ['babel-polyfill', './src-czh5/ext/js/scene/czSceneDemountAn.js'],
        'ext/js/scene/czSceneInstallAn' : ['babel-polyfill', './src-czh5/ext/js/scene/czSceneInstallAn.js']
    },
    plugins: [
        // new CleanWebpackPlugin(), //清理文件夹
        // new CopyWebpackPlugin([   // src/assets 下文件直接复制到 dist 目录下
        //     // { from: 'src/ext/img/',    to: 'build/static/img/icon/'},
        //     // { from: 'src/h5rt_html/',  to: 'build/h5rt_html/' }
        //     // { from: 'src/ext/lib/', to: 'lib/' }
        // ]),
        new webpack.BannerPlugin('' +
            '@Description: [filebase] [hash] \n' +
            '@Author: PengXiang (Email:245803627@qq.com)\n' +
            '@Date: '+ new Date().toString() ),
        // new HtmlWebpackPlugin({
        //     // title: 'Production'
        //     // filename: 'h5T_CZ.html',
        //     // template: './src/h5T_CZ.html'
        // }),
        new ObsoleteWebpackPlugin({
            name: 'ext/js/obsolete',
            browsers : [
                "last 5 versions",
                "> 1%",
                // "IE >= 9",
                "chrome >= 49",
                "Firefox >= 40",
                "ios >= 6",
                "android >= 4.0",
                "not ie <= 10"
            ],
            position: 'afterbegin',
            promptOnNonTargetBrowser: true,
            promptOnUnknownBrowser: true,
            template:'<div style="position: absolute; margin: auto; top:0; left:0; right: 0; text-align: center; z-index: 100;">"Your browser is not supported."</div>'
        }),
        // new ScriptExtHtmlWebpackPlugin({
        //     async: 'obsolete'
        // })
    ],
    // output: {
    //     filename: '[name].min.js',
    //     path: path.resolve(__dirname, 'build/ext/js')
    // },
    module: {
        rules: [
            {
                sideEffects: false,
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // presets: [
                        //     [
                        //         "@babel/preset-env",
                        //         {
                        //             "targets": {
                        //                 "esmodules": true
                        //             }
                        //         }
                        //     ]
                        // ],
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            },
            {
                loader: require.resolve('file-loader'),
                // Exclude `js` files to keep "css" loader working as it injects
                // its runtime that would otherwise be processed through "file" loader.
                // Also exclude `html` and `json` extensions so they get processed
                // by webpacks internal loaders.
                exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
                options: {
                    // name: 'static/media/[name].[hash:8].[ext]',
                    name: 'static/media/[name].[ext]',
                },
            },
        ]
    },
};
