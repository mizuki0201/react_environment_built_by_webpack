module.exports = {
  entry: "./src/index.jsx",
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
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
