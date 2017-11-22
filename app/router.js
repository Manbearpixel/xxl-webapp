import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  if (config.APP.enable_search) {
    this.route('block', { path: '/block/:block_id' });
    this.route('transaction', { path: '/transaction/:txid' });
    this.route('address', { path: '/address/:address_key' });
    this.route('search', { queryParams: ['query'] });
  }

  this.route('about');
  this.route('stats');
  this.route('history');
  this.route('error', { path: '*:' });
});

export default Router;
