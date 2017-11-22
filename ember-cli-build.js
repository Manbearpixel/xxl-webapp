/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('vendor/bootstrap/css/bootstrap-theme.css');
  app.import('vendor/bootstrap/css/bootstrap.css');
  app.import('vendor/bootstrap/fonts/glyphicons-halflings-regular.svg', {
    destDir: 'fonts'
  });
  app.import('vendor/bootstrap/fonts/glyphicons-halflings-regular.ttf', {
    destDir: 'fonts'
  });

  app.import('vendor/simple-line-icons/css/simple-line-icons.css');
  app.import('vendor/simple-line-icons/fonts/Simple-Line-Icons.svg', {
    destDir: 'fonts'
  });
  app.import('vendor/simple-line-icons/fonts/Simple-Line-Icons.ttf', {
    destDir: 'fonts'
  });

  // app.import('./node_modules/bootstrap-sass/scss/stylesheets/bootstrap.scss');
  // app.import('./node_modules/bootstrap-sass/scss/fonts/bootstrap/glyphicons-halflings-regular.svg', {
  //   destDir: 'fonts'
  // });
  // app.import('./node_modules/bootstrap-sass/scss/fonts/bootstrap/glyphicons-halflings-regular.ttf', {
  //   destDir: 'fonts'
  // });
  //
  //
  // app.import('node_modules/simple-line-icons/scss/simple-line-icons.scss');
  // app.import('node_modules/simple-line-icons/fonts/Simple-Line-Icons.svg', {
  //   destDir: 'fonts'
  // });
  // app.import('node_modules/simple-line-icons/fonts/Simple-Line-Icons.ttf', {
  //   destDir: 'fonts'
  // });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
