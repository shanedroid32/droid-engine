module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'engine.js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
};
