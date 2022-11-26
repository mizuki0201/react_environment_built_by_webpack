module.exports = {
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js",
  },
  devServer: {
    static: {
      directory: "./dist",
    },
  },
  mode: "development",
  module: {
    rules: [{ test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ }],
  },
};
