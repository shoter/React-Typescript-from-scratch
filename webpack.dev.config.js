var path = require('path');
var nodeExternals = require('webpack-node-externals');


module.exports = {
    mode: "development",
    node: {
        __dirname: true
    },
    context: __dirname,
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    entry: path.resolve(__dirname, "src/index.tsx"),
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader",
            //https://github.com/TypeStrong/ts-loader/issues/40
            //loose used to enable hot-reload
           // loader: 'babel?loose=all!ts-loader',
            exclude: /(node_modules|build)/,
        },
        {
            enforce: "pre",
            test: /\.js$/,
            exclude: /(node_modules|build)/,
            use: [
                {
                    loader: "source-map-loader"
                }
            ]
        }
    ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, "/build/")
    },
    devServer: {
        before: function (app) {
        },
        after: function(app) {
            
        }
    }
};