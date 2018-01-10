const webpack = require('webpack')
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const helpers = require('./helpers')

module.exports = () => {

    const isProd = process.env.ENV === 'production';

    return {
        resolve: {
            extensions: ['.ts', '.js', '.json'],
            modules: [
                helpers.root('src'),
                helpers.root('node_modules')
            ],
        },
        entry: {
            'polyfills': helpers.root('src', 'polyfills.ts'),
            'vendor': helpers.root('src', 'vendor.ts'),
            'app': [
                helpers.root('src', 'main.ts'),
                helpers.root('src', 'assets', 'styles', 'main.scss')
            ]
        },
        module: {
            rules: [{
                    test: /\.ts$/,
                    use: isProd ? ['@ngtools/webpack'] : ['awesome-typescript-loader?silent=true', 'angular2-template-loader'],
                    exclude: /\.spec\.ts$/
                },
                {
                    test: /\.html$/,
                    use: 'html-loader',
                    exclude: helpers.root('src', 'index.html')
                },
                {
                    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot)$/,
                    use: 'file-loader?name=[name].[ext]'
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
                    exclude: helpers.root('src', 'app')
                },
                {
                    test: /\.scss$/,
                    use: ['raw-loader', 'sass-loader'],
                    include: helpers.root('src', 'app')
                },
                {
                    test: /\.css$/,
                    use: ['to-string-loader', 'css-loader'],
                    include: helpers.root('node_modules')
                },
                {
                    test: /\.json$/,
                    use: 'json-loader'
                }

            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    ENV: JSON.stringify('development')
                }
            }),
            new ExtractTextPlugin(`[name].[hash].css`),
            new webpack.optimize.CommonsChunkPlugin({
                name: ['app', 'polyfills', 'vendor']
            }),
            new ContextReplacementPlugin(
                /angular(\\|\/)core(\\|\/)@angular/,
                helpers.root('src')
            ),
            new HtmlWebpackPlugin({
                template: helpers.root('src', 'index.html')
            }),
            new CopyWebpackPlugin([{
                from: helpers.root('src', 'rest-api'),
                to: 'rest-api'
            }])
        ]

    }

}