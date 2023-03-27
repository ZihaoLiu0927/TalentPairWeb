const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: "development",
    devServer: {
        port: 8081,
        //historyApiFallback: true,
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react']
              }
            }
          },

          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },

          {
            test: /\.png$/,
            use: {
                loader: 'file-loader',
              }
          },
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'landing',
            filename: 'remoteEntry.js',
            exposes: {
                './LandingIndex': './src/bootstrap',
            },
            shared: [
                'faker',
            ],
        }),

        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};