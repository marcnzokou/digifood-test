const webpack = require('webpack')
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin')
const helpers = require('./helpers')

const ENV = 'test'

module.exports = {
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        modules: [
            helpers.root('src'),
            helpers.root('node_modules')
        ],
    },
    module: {
        exprContextCritical: false,
        rules: [{
                test: /\.ts$/,
                use: ['awesome-typescript-loader?silent=true', 'angular2-template-loader']
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.scss$/,
                use: ['raw-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            }
        ]
    },
    plugins: [
        new ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('src')
        ),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        })
    ]
}