const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      { 
        test: /\.(j|t)s$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      }
    ]
  }
};