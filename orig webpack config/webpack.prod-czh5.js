const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //引入清除文件插件
const common = require('./webpack.common-czh5.js');

module.exports = merge(common, {
    mode: 'production',
    // devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(), //清理文件夹
        new UglifyJSPlugin({
            // sourceMap: true,
            // mangle: {
            //     toplevel: true
            // },
            cache: true, // 启用文件缓存
            parallel: true, // 使用多进程并行运行和文件缓存来提高构建速度
            uglifyOptions: {
                compress: true
            }
        }),
        new CopyWebpackPlugin([   // src/assets 下文件直接复制到 dist 目录下
            // { from: 'src/ext/img/',    to: 'build/static/img/icon/'},
            // { from: 'src/h5rt_html/',  to: 'build/h5rt_html/' }
            // { from: 'src/ext/lib/', to: 'lib/' }
            { from: 'public-czh5/', to: './' }
        ]),
        // ,
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringif('production')
        // })
    ],
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'build-czh5/')
    },
});
