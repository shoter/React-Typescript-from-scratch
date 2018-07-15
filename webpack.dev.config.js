var path = require('path');
var nodeExternals = require('webpack-node-externals');


module.exports = {
    mode: "development",
    target: "node",
    node: {
        __dirname: true
    },
    context: __dirname,
    entry: path.resolve(__dirname, "src/index.ts"),
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder 
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /(node_modules|typescript-compiled)/,
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, "/dist/")
    },
    devServer: {
        before: function (app) {
        },
        after: function(app) {
            
        }
    }
};