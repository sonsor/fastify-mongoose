const path = require("path");
const webpack = require("webpack");
const nodeExternals = require('webpack-node-externals');



module.exports = {
    mode: 'production',
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve('./node_modules'), ///(|bower_components)/,
                loader: "babel-loader",
            }
        ]
    },
    externals: [nodeExternals()],
};