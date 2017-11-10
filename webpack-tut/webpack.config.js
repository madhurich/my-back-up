module.exports = {
	entry: __dirname + '/src/js/app.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.js$/, loader: 'babel-loader', query:{presets: ['es2015']}, exclude: /node_modules/}
		]
	}
};