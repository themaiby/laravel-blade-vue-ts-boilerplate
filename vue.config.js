const path = require('path');

module.exports = {
  publicPath: '.',
  outputDir: path.resolve(__dirname, '/public/'),
  indexPath: path.resolve(__dirname, '/resources/views/index.blade.php'),
  configureWebpack: {
    entry: ['./vue/src/main.ts'],
    resolve: {
      alias: {
        '@': path.join(__dirname, 'vue/src/'),
      },
    },
  },
  pwa: {
    workboxOptions: {
      skipWaiting: true,
    },
  },
};
