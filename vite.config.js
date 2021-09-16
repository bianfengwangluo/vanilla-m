const path = require('path');

export default {
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        intro: path.resolve(__dirname, 'pages/intro.html'),
        permission: path.resolve(__dirname, 'pages/permission.html'),
        privacy: path.resolve(__dirname, 'pages/privacy-policy.html'),
      },
    },
  },
};
