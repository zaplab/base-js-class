
var path = require('path');
var webpack = require('webpack');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.js?$/,
                include: [
                    path.resolve(__dirname, 'tests/spec'),
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'node_modules'),
                ],
                loader: 'babel',
                query: {
                    presets: [
                        'es2015',
                        'stage-0',
                    ],
                    plugins: [
                        'babel-plugin-add-module-exports',
                        'transform-es2015-modules-commonjs',
                        'transform-object-assign',
                    ],
                },
            }
        ]
    },

    resolve: {
        root: __dirname,
        alias: {
            'zap-base-js-class': 'src/index.js',
        },
        modulesDirectories: [
            'src',
            'node_modules',
        ],
    },

    resolveLoader: {
        root: __dirname,
        modulesDirectories: [
            'src',
            'node_modules',
        ],
    },
};
