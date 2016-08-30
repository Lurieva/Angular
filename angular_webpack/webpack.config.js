'use strict';
var webpack = require('webpack'),
    path = require('path'),
    WebpackErrorNotificationPlugin = require('webpack-error-notification');

var APP = path.resolve(__dirname, 'app');

module.exports = {
    context: APP,
    watch: true,
    entry: {
        app: ['webpack/hot/dev-server', './core/bootstrap.js']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new WebpackErrorNotificationPlugin()
    ],
    output: {
        path: APP,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.js$/,
                loader: 'ng-annotate!babel?presets[]=es2015',
                exclude: /node_modules|bower_components/
            },
            { test: /\.html$/, loader: 'raw' }
        ]
    }
}
