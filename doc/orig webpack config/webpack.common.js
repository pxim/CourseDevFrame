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
        'frame/ext/js/frameGlobal.min'               : ['babel-polyfill', './src/pages/frameGlobal.js'],

        'content/h5code/js/comAni'                   : ['babel-polyfill', './src/pages/subpage/comAni.js'],
        // 'content/h5code/js/comAni2'                  : './src/pages/subpage/comAni2.js',
        // 'content/h5code/js/comSubAni'                : './src/pages/subpage/comSubAni.js',
        'content/h5code/js/enterAni'                 : ['babel-polyfill', './src/pages/subpage/enterAni.js'],
        'content/h5code/js/enterAni2'                : ['babel-polyfill', './src/pages/subpage/enterAni2.js'],
        'content/h5code/js/exercisesDrag'            : ['babel-polyfill', './src/pages/subpage/exercisesDrag.js'],
        'content/h5code/js/exercisesMultiSelect'     : ['babel-polyfill', './src/pages/subpage/exercisesMultiSelect.js'],
        'content/h5code/js/exercisesSingleSelect'    : ['babel-polyfill', './src/pages/subpage/exercisesSingleSelect.js'],
        'content/h5code/js/hoverMC'                  : ['babel-polyfill', './src/pages/subpage/hoverMC.js'],
        'content/h5code/js/loopPlayMC'               : ['babel-polyfill', './src/pages/subpage/loopPlayMC.js'],
        'content/h5code/js/mainAn'                   : ['babel-polyfill', './src/pages/subpage/mainAn.js'],
        'content/h5code/js/menu_global'              : ['babel-polyfill', './src/pages/subpage/menu_global.js'],
        'content/h5code/js/menuAn'                   : ['babel-polyfill', './src/pages/subpage/menuAn.js'],
        'content/h5code/js/menuAn2.min'              : ['babel-polyfill', './src/pages/subpage/menuAn2.js'],
        'content/h5code/js/menuDir'                  : ['babel-polyfill', './src/pages/subpage/menuDir.js'],
        'content/h5code/js/overallTestDrag'          : ['babel-polyfill', './src/pages/subpage/overallTestDrag.js'],
        'content/h5code/js/overallTestEnd'           : ['babel-polyfill', './src/pages/subpage/overallTestEnd.js'],
        'content/h5code/js/overallTestMain'          : ['babel-polyfill', './src/pages/subpage/overallTestMain.js'],
        // 'content/h5code/js/overallTestMain2'         : './src/pages/subpage/overallTestMain2.js',
        'content/h5code/js/oTestSelect.min'          : ['babel-polyfill', './src/pages/subpage/oTestSelect.js'],
        'content/h5code/js/oTestDrag.min'            : ['babel-polyfill', './src/pages/subpage/oTestDrag.js'],
        'content/h5code/js/overallTestMultiSelect'   : ['babel-polyfill', './src/pages/subpage/overallTestMultiSelect.js'],
        'content/h5code/js/overallTestSingleSelect'  : ['babel-polyfill', './src/pages/subpage/overallTestSingleSelect.js'],
        'content/h5code/js/overallTestStart'         : ['babel-polyfill', './src/pages/subpage/overallTestStart.js'],
        'content/h5code/js/overallTestTip'           : ['babel-polyfill', './src/pages/subpage/overallTestTip.js'],
        'content/h5code/js/showMC'                   : ['babel-polyfill', './src/pages/subpage/showMC.js'],
        'content/h5code/js/subPage2'                 : ['babel-polyfill', './src/pages/subpage/subPage2.js'],
        'content/h5code/js/subVideoPage'             : ['babel-polyfill', './src/pages/subpage/subVideoPage.js'],
        'content/h5code/js/switchMC'                 : ['babel-polyfill', './src/pages/subpage/switchMC.js'],
        // 'content/h5code/js/switchMC2'                : './src/pages/subpage/switchMC2.js',
        'content/h5code/js/switchPage'               : ['babel-polyfill', './src/pages/subpage/switchPage.js'],
        'content/h5code/js/switchPage2'              : ['babel-polyfill', './src/pages/subpage/switchPage2.js'],
        'content/h5code/js/switchVideoPage'          : ['babel-polyfill', './src/pages/subpage/switchVideoPage.js'],
        'content/h5code/js/videoAni'                 : ['babel-polyfill', './src/pages/subpage/videoAni.js'],
        // 'content/h5code/js/videoAni2'                : './src/pages/subpage/videoAni2.js',

        'content/h5code/js/eTestSelect.min'          : ['babel-polyfill', './src/pages/subpage/eTestSelect.js'],
        'content/h5code/js/eTestDrag.min'            : ['babel-polyfill', './src/pages/subpage/eTestDrag.js'],
        'content/h5code/js/switchMC2.min'            : ['babel-polyfill', './src/pages/subpage/switchMC2.js'],
        'content/h5code/js/menuAn3.min'              : ['babel-polyfill', './src/pages/subpage/menuAn3.js'],

        'content/h5code/js/stepNextAn.min'           : ['babel-polyfill', './src/pages/subpage/stepNextAn.js'],
        'content/h5code/js/stepNextAn2.min'          : ['babel-polyfill', './src/pages/subpage/stepNextAn2.js'],
        'content/h5code/js/scrollBarAn.min'          : ['babel-polyfill', './src/pages/subpage/scrollBarAn.js'],

        'content/h5code/js/hyCircuitH5.min'          : ['babel-polyfill', './src/pages/subpage/hyCircuitH5.js'],

        'content/h5code/js/nZDDLAn.min'              : ['babel-polyfill', './src/pages/subpage/nZDDLAn.js'],
        'content/h5code/js/nZDDLAn2.min'             : ['babel-polyfill', './src/pages/subpage/nZDDLAn2.js'],

        'content/h5code/js/C0201a.min'             : ['babel-polyfill', './src/pages/subpage/C0201a.js'],

        // 'content/h5code/component/CustomVideoPlayer' : ['babel-polyfill', './src/content/h5code/component/CustomVideoPlayer.js'],
    },
    plugins: [
        // new CleanWebpackPlugin({
        //     // // cleanOnceBeforeBuildPatterns: ['frame/ext/js/', 'frame/ext/lib/', 'content/h5code/', 'content/AHTML RT'],   //构建前，删除指定目录下的文件
        //     // cleanOnceBeforeBuildPatterns: ['frame/ext/js/', 'content/h5code/js/', 'content/h5code/components/'],   //构建前，删除指定目录下的文件
        //     // // cleanAfterEveryBuildPatterns: ['obsolete.min.js'], //构建后，删除指定文件
        //     // // dangerouslyAllowCleanPatternsOutsideProject: true
        // }), //清理文件夹
        // new CopyWebpackPlugin([   // src/assets 下文件直接复制到 dist 目录下
        //     // { from: 'src/frame/ext/lib/createjs.min.js', to: 'frame/ext/lib/' },
        //     // { from: 'src/frame/ext/lib/jquery.min.js', to: 'frame/ext/lib/' },
        //     // { from: 'src/frame/ext/lib/ObjTree.js', to: 'frame/ext/lib/' },
        //     //
        //     // { from: 'src/frame/ext/lib/createjs.min.js', to: 'content/h5code/lib/' },
        //     // { from: 'src/frame/ext/lib/jquery.min.js', to: 'content/h5code/lib/' },
        //     //
        //     // { from: 'src/AHTML RT/', to: 'content/AHTML RT/' }
        // ]),
        new webpack.BannerPlugin('' +
            '@Description: [filebase] [hash] \n' +
            '@Author: PengXiang (Email:245803627@qq.com)\n' +
            '@Date: '+ new Date().toString() ),
        // new HtmlWebpackPlugin({
        //     // title: 'Production'
        //     // filename: 'h5T_CZ.html',
        //     // template: './release/index.html'
        // }),
        new ObsoleteWebpackPlugin({
            name: 'frame/ext/js/obsolete.min',
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
        // }),
        // "dynamic-import-webpack"
    ],
    // output: {
    //     //     filename: '[name].js',
    //     //     // filename: '[name].min.js',
    //     //     // chunkFilename: '[name].min.js',
    //     //     // chunkFilename: 'frame/ext/js/[name].min.js',
    //     //     path: path.resolve(__dirname, 'release/')
    //     // },
    module: {
        rules: [
            {
                sideEffects: false
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
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
    }
};
