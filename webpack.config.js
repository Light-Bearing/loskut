const PATH = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var debug = process.env.NODE_ENV !== 'production';

module.exports = {
    devtool: debug ? 'source-map' : undefined,
    entry: './src/index.js',
    output: {
        path: PATH.join(__dirname,'/dist'),
        filename:'index_bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }
        )
    ]
}