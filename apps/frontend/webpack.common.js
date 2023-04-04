/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        index: './apps/frontend/src/index.tsx',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
        ],
    },
    output: {
        publicPath: '/',
        globalObject: 'this',
        path: path.resolve(__dirname, 'dist', 'app'),
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify({}),
        }),
        new HtmlWebpackPlugin({
            template: './apps/frontend/src/index.html',
        }),
    ],
}
