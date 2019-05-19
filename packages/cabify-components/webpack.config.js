const path = require('path');

module.exports = () => ({
  entry: {
    button: './src/Button/Button.js',
    input: './src/Input/Input.js',
    'prefix-dropdown': './src/PrefixDropDown/PrefixDropDown.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // {
      //   test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
      //   loader: 'url-loader',
      //   options: {
      //     name: '[hash].[ext]',
      //     limit: 10000,
      //   },
      // },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      // },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
});
