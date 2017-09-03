var path = require('path');
// var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
	filename: 'style.css'
})

module.exports = {
	entry: "./src/js/change.js",
	output: {
		path: path.resolve(__dirname,"dist"),
		filename: 'bundle.js',
		publicPath: '/dist'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ['babel-preset-es2015'].map(require.resolve)
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use: extractPlugin.extract({
					use: [ 'css-loader', 'sass-loader']
				})
			}
		]
	},
	plugins: [
		extractPlugin
	]
};