const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, './index.js'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		port: 8080,
		static: [
			{ directory: path.join(__dirname, 'dist') },
			{ directory: path.join(__dirname, 'icons'), publicPath: '/icons' },
			{ directory: path.join(__dirname, 'styles'), publicPath: '/styles' }
		],
		hot: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	]
};