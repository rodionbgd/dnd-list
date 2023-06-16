const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        environment: {
            arrowFunction: false,
        },
    },
    mode: process.env.NODE_ENV === "development" ? "development" : "production",
    plugins: [
        new HtmlWebpackPlugin({
            title: "Heart",
            template: "./src/index.html",
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env",],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    resolve: {extensions: ['.js']},
    devServer: {
        static: {
            directory: path.join(__dirname, "dev"),
        },
        compress: true,
        port: 9000,
    },
};
