const { merge } = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
        // historyApiFallback: {
        //     index: 'index.html',
        // }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                landing: 'landing@http://localhost:8081/remoteEntry.js',
                login: 'login@http://localhost:8082/remoteEntry.js'
            },
            shared: packageJson.dependencies,
        }),

        new HTMLWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);
