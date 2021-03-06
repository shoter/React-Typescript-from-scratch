const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: "development",
    target: "web",
    node: {
        __dirname: true
    },
    context: __dirname,
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    entry: path.join(__dirname, "src", "index.tsx"),
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
                use: [{
                    loader: "source-map-loader"
                }]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ["css-loader", "sass-loader"]
                })
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', ".scss"]
    },
    output: {
        filename: 'bundle.js',
        // This is where webpack-dev-server serves your bundle
        // which is created in memory.
        // To use the in-memory bundle,
        // your <script> 'src' should point to the bundle
        // prefixed with the 'publicPath', e.g.:
        //   <script src='http://localhost:9001/assets/bundle.js'>
        //   </script>
        publicPath: "./",
        path: path.join(__dirname, "/build/")
    },
    devServer: {
        contentBase: path.join(__dirname, "/build"),
        before: function (app) {},
        after: function (app) {

        }
    },
    plugins: [
        new HtmlWebpackPlugin({
                title: "React Typescript from scratch",
                template: path.join(__dirname, "src", "index.html")
            },

        ),
        new ExtractTextPlugin({
            filename:"bundle.css",
            allChunks: true,
            disable: false
        })
    ],
    optimization: {
        minimizer: [
          new UglifyJSPlugin()
        ]
      }

};
