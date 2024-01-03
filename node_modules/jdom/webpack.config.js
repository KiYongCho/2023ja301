const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const context = __dirname;
const build = path.join(context, 'dist');

module.exports = function(env) {
    const isProduction = env && env.NODE_ENV === 'production';
    const config = {
        mode: isProduction ? 'production' : 'development',
        entry: {
            jdom: path.join(context, 'index.js'),
        },
        output: {
            path: build,
            filename: '[name].js',
            library: ['jdom'],
            libraryTarget: 'umd',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    enforce: 'pre',
                    include: path.join(context, 'index.js'),
                    use: ['eslint-loader'],
                },
            ],
        },
        devtool: !isProduction && 'source-map',
        devServer: {},
        resolve: {
            modules: ['node_modules'],
            extensions: ['.js'],
        },
    };
    if (!isProduction) {
        config.plugins = [
            new HtmlWebpackPlugin({
                inject: 'head',
                template: path.join(context, 'test', 'template.html'),
            }),
        ];
    }
    return config;
};
