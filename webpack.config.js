module.exports = {
  entry: "./src/index.tsx",
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
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: [/\.ts$/, /\.tsx$/],
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
