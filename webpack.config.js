const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        inline: true,
        compress: true,
        port: 3000
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin(
            {
                meta: {
                    viewport: "width=device-width, initial-scale=1"
                },
                template: './public/index.html',
                title: "Beyond The Sketch Shopping Basket"
            }
        )
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'ts-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ],
                    plugins: [
                        '@babel/plugin-transform-spread',
                        '@babel/plugin-proposal-object-rest-spread'
                    ]
                }
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    }
}