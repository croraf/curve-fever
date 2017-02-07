var path = require('path');

module.exports = {
  entry: './src/main/webapp/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/main/webapp/dist')
  }
};