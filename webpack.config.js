const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'app/src'),

    entry: './index.js',

    output: {
        filename: 'app.bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'www')
    },

    resolve: {
        extensions: ['.js']
    },

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './index.html'
        })
    ],

    devServer: {
        port: 7000,
        contentBase: path.resolve(__dirname, "www"),
        historyApiFallback: {
            index: 'index.html',
            disableDotRule: true
        }
    },

    devtool: 'eval-source-map',

    watch: false
};
