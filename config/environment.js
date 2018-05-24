/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    version: '0.2.0',
    rootURL: '/',
    environment,
    locationType: 'auto',
    modulePrefix: 'XXL-WebApp',

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      enable_search:  true, // enable blockchain search
      ODN_API_XXL:    'http://localhost:3000',  // uri for xxl-api
      ODN_API_SEARCH: 'http://localhost:3000/api/search'   // uri for blockchain search
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.ODN_API_XXL     = 'https://api.odn.init.run';
    END.APP.ODN_API_SEARCH  = 'https://api.odn.init.run/api/search';
  }

  return ENV;
};
