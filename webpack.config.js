const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  devServer: {
    publicPath: '/build/',
    compress: true,
    hot: true,
    port: 8080,
    proxy: {
      '/server': 'http://localhost:3000',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules[/\\](?!react-data-grid[/\\]lib)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              [
                '@babel/plugin-proposal-class-properties',
              ],
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  
};
