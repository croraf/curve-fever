var path = require('path');

module.exports = {
  entry: './src/main/webapp/indexRoundScreen.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/main/webapp/dist')
  },
  module: {
      rules: [
        {
            test: /\.(png|jpg)$/,
            use: [
              {
                loader: "file-loader?name=[name].[ext]&publicPath=dist/",
              },
            ],
         },
        {
          test: /\.css$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
          ],
        },
        {
          test: /\.js$/,
          use: [
            { loader: "babel-loader" },
          ],
        }

      ],
    },
};