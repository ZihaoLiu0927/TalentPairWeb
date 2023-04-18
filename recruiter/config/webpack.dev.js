const { merge } = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8084/',
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 8084,
        historyApiFallback: {
            index: '/index.html',
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'recruiter',
            filename: 'remoteEntry.js',
            exposes: {
                './RecruiterIndex': './src/bootstrap',
            },
            shared: packageJson.dependencies,
        }),

        new HTMLWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);
