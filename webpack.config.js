const path = require('path');

const webpack = require("webpack");

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // export const config = {
    target: 'web',
    mode: 'development',
    entry: { index: './src/index.js' },
    devServer: {
        writeToDisk: true
    },
    node: false,
    resolve: {
        alias: {
            js: path.resolve(__dirname, "src/js/")
        }
    },
    output: {
        filename: './js/[name].bundle.js',
        // path: path.resolve(__dirname, 'dist'),
        path: __dirname + '/dist/js',
        chunkFilename: './js/chunkFilename.[name].bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin({ verbose: true }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './template.html',
            title: 'prefetch poc',
            // page: 'index/index-body.ejs',
            inject: true,
            chunks: ['index'] // which of the entry-chunks to include for this page
        }),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [["@babel/preset-env", { modules: false }]], // use .babelrc to customize browser support
                        plugins: ['@babel/plugin-proposal-object-rest-spread',
                            '@babel/plugin-transform-runtime',
                            '@babel/plugin-transform-classes',
                        ]
                    }
                }
            },
        ]
    }
}