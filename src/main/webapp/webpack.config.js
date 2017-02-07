var path = require('path');

module.exports = {
  entry: ['./static/roundScreen/backgroundAudio.js',
          './static/roundScreen/XunusedX.js',
          './static/roundScreen/directionListener.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};