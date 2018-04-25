import webpack from 'webpack';
import path from 'path';

const outputPath = path.join(__dirname, 'app', 'dist');

module.exports = {
  context: path.resolve(__dirname, './src/main'),
  target: 'electron-main',
	entry: './index.js',
	output: {
		path: outputPath,
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
            presets: ['env'],
            "plugins": ["transform-async-to-generator"]
					}
				}
			}
		]
	},
	plugins: [
    new webpack.DefinePlugin({
      $dirname: "__dirname"
    })
	]
}
