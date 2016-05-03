var path = require("path");

module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}
