const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.js",
        clean: true
    },
    devServer: {
        contentBase: "./dist",
        open: true, // open browser
        overlay: true,
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'Fonts/',
                    }
                }]
            }
        ]
    },

    plugins: [new htmlWebpackPlugin({
        template: "./src/html/index.html"
    }),
        new miniCssExtractPlugin()
    ]
};