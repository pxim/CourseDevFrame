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
        'frame/ext/js/frameGlobal.min'               : './src/frame/ext/js/frameGlobal.js',

        'content/h5code/js/comAni'                   : './src/content/h5code/js/comAni.js',
        // 'content/h5code/js/comAni2'                  : './src/content/h5code/js/comAni2.js',
        // 'content/h5code/js/comSubAni'                : './src/content/h5code/js/comSubAni.js',
        'content/h5code/js/enterAni'                 : './src/content/h5code/js/enterAni.js',
        'content/h5code/js/enterAni2'                : './src/content/h5code/js/enterAni2.js',
        'content/h5code/js/exercisesDrag'            : './src/content/h5code/js/exercisesDrag.js',
        'content/h5code/js/exercisesMultiSelect'     : './src/content/h5code/js/exercisesMultiSelect.js',
        'content/h5code/js/exercisesSingleSelect'    : './src/content/h5code/js/exercisesSingleSelect.js',
        'content/h5code/js/hoverMC'                  : './src/content/h5code/js/hoverMC.js',
        'content/h5code/js/loopPlayMC'               : './src/content/h5code/js/loopPlayMC.js',
        'content/h5code/js/mainAn'                   : './src/content/h5code/js/mainAn.js',
        'content/h5code/js/menu_global'              : './src/content/h5code/js/menu_global.js',
        'content/h5code/js/menuAn'                   : './src/content/h5code/js/menuAn.js',
        'content/h5code/js/menuAn2.min'              : './src/content/h5code/js/menuAn2.js',
        'content/h5code/js/menuDir'                  : './src/content/h5code/js/menuDir.js',
        'content/h5code/js/overallTestDrag'          : './src/content/h5code/js/overallTestDrag.js',
        'content/h5code/js/overallTestEnd'           : './src/content/h5code/js/overallTestEnd.js',
        'content/h5code/js/overallTestMain'          : './src/content/h5code/js/overallTestMain.js',
        // 'content/h5code/js/overallTestMain2'         : './src/content/h5code/js/overallTestMain2.js',
        'content/h5code/js/oTestSelect.min'          : './src/content/h5code/js/oTestSelect.js',
        'content/h5code/js/oTestDrag.min'            : './src/content/h5code/js/oTestDrag.js',
        'content/h5code/js/overallTestMultiSelect'   : './src/content/h5code/js/overallTestMultiSelect.js',
        'content/h5code/js/overallTestSingleSelect'  : './src/content/h5code/js/overallTestSingleSelect.js',
        'content/h5code/js/overallTestStart'         : './src/content/h5code/js/overallTestStart.js',
        'content/h5code/js/overallTestTip'           : './src/content/h5code/js/overallTestTip.js',
        'content/h5code/js/showMC'                   : './src/content/h5code/js/showMC.js',
        'content/h5code/js/subPage2'                 : './src/content/h5code/js/subPage2.js',
        'content/h5code/js/subVideoPage'             : './src/content/h5code/js/subVideoPage.js',
        'content/h5code/js/switchMC'                 : './src/content/h5code/js/switchMC.js',
        // 'content/h5code/js/switchMC2'                : './src/content/h5code/js/switchMC2.js',
        'content/h5code/js/switchPage'               : './src/content/h5code/js/switchPage.js',
        'content/h5code/js/switchPage2'              : './src/content/h5code/js/switchPage2.js',
        'content/h5code/js/switchVideoPage'          : './src/content/h5code/js/switchVideoPage.js',
        'content/h5code/js/videoAni'                 : './src/content/h5code/js/videoAni.js',
        // 'content/h5code/js/videoAni2'                : './src/content/h5code/js/videoAni2.js',

        'content/h5code/js/eTestSelect.min'          : './src/content/h5code/js/eTestSelect.js',
        'content/h5code/js/eTestDrag.min'            : './src/content/h5code/js/eTestDrag.js',
        'content/h5code/js/switchMC2.min'            : './src/content/h5code/js/switchMC2.js',
        'content/h5code/js/menuAn3.min'              : './src/content/h5code/js/menuAn3.js',

        'content/h5code/js/stepNextAn.min'           : './src/content/h5code/js/stepNextAn.js',
        'content/h5code/js/stepNextAn2.min'          : './src/content/h5code/js/stepNextAn2.js',
        'content/h5code/js/scrollBarAn.min'          : './src/content/h5code/js/scrollBarAn.js',

        'content/h5code/js/hyCircuitH5.min'          : './src/content/h5code/js/hyCircuitH5.js',

        'content/h5code/component/CustomVideoPlayer' : './src/content/h5code/component/CustomVideoPlayer.js',
    },
    plugins: [
        new CleanWebpackPlugin({
            // // cleanOnceBeforeBuildPatterns: ['frame/ext/js/', 'frame/ext/lib/', 'content/h5code/', 'content/AHTML RT'],   //构建前，删除指定目录下的文件
            // cleanOnceBeforeBuildPatterns: ['frame/ext/js/', 'content/h5code/js/', 'content/h5code/components/'],   //构建前，删除指定目录下的文件
            // // cleanAfterEveryBuildPatterns: ['obsolete.min.js'], //构建后，删除指定文件
            // // dangerouslyAllowCleanPatternsOutsideProject: true
        }), //清理文件夹
        new CopyWebpackPlugin([   // src/assets 下文件直接复制到 dist 目录下
            // { from: 'src/frame/ext/lib/createjs.min.js', to: 'frame/ext/lib/' },
            // { from: 'src/frame/ext/lib/jquery.min.js', to: 'frame/ext/lib/' },
            // { from: 'src/frame/ext/lib/ObjTree.js', to: 'frame/ext/lib/' },
            //
            // { from: 'src/frame/ext/lib/createjs.min.js', to: 'content/h5code/lib/' },
            // { from: 'src/frame/ext/lib/jquery.min.js', to: 'content/h5code/lib/' },
            //
            // { from: 'src/AHTML RT/', to: 'content/AHTML RT/' }
        ]),
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
