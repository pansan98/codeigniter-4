const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const glob = require("glob");

let entries = {};

// JS
glob.sync("./js/*.js").map(function (file) {
    const pattern = new RegExp('./js');
    let name = path.dirname(file).replace(pattern, 'js') + '/' + path.basename(file, '.js');
    entries[name] = file;
});

// bundle
for (key in entries) {
    entries[key + '.bundle'] = entries[key];
}

module.exports = {
    mode: 'development',
    entry: entries,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../bundle/custom/js/')
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                include: /\.min\.js$/
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            minimize: true
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            url: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: [
                                require('autoprefixer')({
                                    grid: true
                                })
                            ]
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            outputStyle: "expanded",
                        }
                    }
                ]
            }
        ]
    }
};