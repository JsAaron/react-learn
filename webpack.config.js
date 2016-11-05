var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js|jsx$/,
            loaders: ['babel?presets[]=es2015,presets[]=react,presets[]=stage-0']
        }]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Hello World app'
        })
    ]
}