const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入env配置文件
// const defineConfig = require('./config/config.jsx');

module.exports = {

    entry: [
        './entry/index.js'
    ],

    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].bundle.js', // 推荐使用
        chunkFilename: '[name]-[id].bundle.js', // 代码分割
        publicPath: '/',        /*没有配置这个的话，子路由访问会出错*/
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'router',
            template: './entry/index.ejs'
        }),
        /*new webpack.DefinePlugin({    //全局变量
            DATAHOST: JSON.stringify(defineConfig.DATAHOST)
        })*/
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }

        ]
    },

    resolve:{
        extensions:['.css','.js','.jsx']
    },

}