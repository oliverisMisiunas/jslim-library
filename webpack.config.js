// https://vmarchesin.medium.com/how-to-publish-a-npm-package-in-four-steps-4344ab88e852

const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve("dist"),
        filename: "index.js",
        libraryTarget: "commonjs2",
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: "babel-loader",
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                minify: TerserPlugin.uglifyJsMinify,
            }),
        ],
    },
    resolve: {
        extensions: [".js"],
    },
};
