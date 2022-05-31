const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.ts'),
  target: 'webworker',
  output: {
    filename: 'worker.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  optimization: {
    minimize: false,
  },
  resolve: {
    fallback: {
      fs: false,
    },
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.ya?ml$/, use: 'yaml-loader' },
    ]
  },
  plugins: [new NodePolyfillPlugin()],
  performance: {
    hints: false,
  },
};
