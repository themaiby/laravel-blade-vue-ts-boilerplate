/* eslint-disable no-path-concat */
const path = require('path');

module.exports = {
  publicPath: '.',
  outputDir: __dirname + '/public/',
  indexPath: __dirname + '/resources/views/index.blade.php',
  configureWebpack: {
    entry: ['./vue/src/main.ts'],
    resolve: {
      alias: {
        '@': path.join(__dirname, 'vue/src/'),
      },
    },
  },
};
