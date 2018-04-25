// shared config (dev and prod)
const {resolve, join} = require('path');
const {CheckerPlugin} = require('awesome-typescript-loader');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    context: resolve(__dirname, '../../src'),
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader', 'source-map-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'awesome-typescript-loader'],
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader', "css-loader?modules&importLoaders=1&localIdentName=[name]_[local]___[hash:base64:5],typed-css-modules"
                ]
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    "css-loader?importLoaders=1",
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.styl$/,
                use: ['style-loader',
                    "css-loader?modules&importLoaders=1&sourceMap&localIdentName=[name]_[local]___[hash:base64:5],typed-css-modules",
                    'postcss-loader?sourceMap',
                    'stylus-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
                ],
            },
        ],
    },
    plugins: [
        new CheckerPlugin(),
        new StyleLintPlugin(),
        new HtmlWebpackPlugin({template: 'index.html.ejs',}),
    ],
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
    performance: {
        hints: false,
    },
};
