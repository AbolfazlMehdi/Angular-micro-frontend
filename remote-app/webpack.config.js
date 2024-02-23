const { share, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const webpackConfig =  withModuleFederationPlugin({

  name: 'remote-app',

  exposes: {
    './PagesModule': './src/app/pages/pages.module.ts',
  },

  shared: share({
    '@angular/core': { singleton: true },
    '@angular/common': { singleton: true  },
    '@angular/common/http': { singleton: true  },
    '@angular/compiler': { singleton: true },
    '@angular/platform-browser': { singleton: true },
    '@angular/platform-browser-dynamic': { singleton: true },
    '@angular/router': { singleton: true  },
    '@angular/forms': { singleton: true },
    '@angular/animations': { singleton: true },
  }),

});

module.exports = webpackConfig