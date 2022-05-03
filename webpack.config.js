const path = require('path');

module.exports = {

    mode: 'development',
    entry: './lib/SimpleLazy.ts',

    output:{
        filename: 'simple-lazy.js',
        path: path.resolve(__dirname, 'dist'),
        library: "SimpleLazy",
        libraryTarget: "umd",
        globalObject: 'window'
    },

    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude:'/node_modules/'
        }]

    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    devServer: {
        static: {
          directory: __dirname,
        },
        compress: true,
        port: 9000,
    },

    target: ["web",'es5']

}