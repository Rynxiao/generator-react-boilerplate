'use strict';

/**
 * Dist configuration. Used to build the
 * final output when running npm run dist.
 */
const webpack = require('webpack');
const WebpackBaseConfig = require('./Base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

class WebpackDistConfig extends WebpackBaseConfig {

    constructor() {
        super();
        this.config = {
            cache: false,
            devtool: 'source-map',
            entry: {
                main: ['./client.js'],
                vendor: ['react', 'react-dom', 'redux', 'react-redux', 'react-router-dom',
                    'react-router-redux', 'react-css-modules', 'history']
            },
            plugins: [
                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': '"production"'
                }),
                new webpack.optimize.AggressiveMergingPlugin(),
                new webpack.NoEmitOnErrorsPlugin(),
                new webpack.optimize.CommonsChunkPlugin({
                    name: 'vendor',
                    minChunks: Infinity
                }),
                new HtmlWebpackPlugin({
                    filename: path.resolve('./dist/index.html'),
                    template: path.resolve('./src/index-release.html'),
                    inject: 'body'
                })
            ]
        };

        // Deactivate hot-reloading if we run dist build on the dev server
        this.config.devServer.hot = false;
        this.config.output.filename = '[name].[chunkhash].js';
    }

    /**
     * Get the environment name
     * @return {String} The current environment
     */
    get env() {
        return 'dist';
    }
}

module.exports = WebpackDistConfig;
