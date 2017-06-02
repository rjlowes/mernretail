/*
    ./webpack.config.js
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    watch: true,
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            __dirname + '/node_modules',
            __dirname + '/app/client/scripts'
        ]
    },
    entry: ['./app/client/scripts/main.jsx', './app/client/sass/main.scss'],
    output: {
        path: path.resolve('./public'),
        filename: 'scripts/main.build.js'
    },
    module: {
        // loaders: [
        //     { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        //     { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        // ],
        // rules: [{
        //     test: /\.scss$/,
        //     use: [{
        //         loader: "style-loader" // creates style nodes from JS strings
        //     }, {
        //         loader: "css-loader" // translates CSS into CommonJS
        //     }, {
        //         loader: "sass-loader" // compiles Sass to CSS
        //     }]
        // }]
        rules: [
            {
                // test: /\.js$/,
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            }
        ]
    },
     plugins: [
        new HtmlWebpackPlugin({
          title: 'Hapi Retail',
          template: './app/client/index.ejs',
          filename: 'index.html'
        })
      ]
};
