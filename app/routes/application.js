import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  odnNetwork: Ember.inject.service(),

  beforeModel() {
    if (config.APP.enable_search === false) {
      $('body').addClass('no-search');
    }
  },

  model() {
    return Ember.RSVP.hash({
      priceInfo:      this.get('odnNetwork').getPriceInfo(),
      odnDataInfo:    this.get('odnNetwork').getInfo(),
      odnDataMining:  this.get('odnNetwork').getMiningInfo(),
      currentBlock:   '--',
      networkWeight:  '--',
      enableSearch:   config.APP.enable_search
    });
  },

  actions: {
    didTransition() {
      // console.log('didTransition'. this);
      // this.sendAction('toggleMobileNav');
    },

    loading(transition, originRoute) {
      // let controller = this.controllerFor('foo');
      // controller.set('currentlyLoading', true);
      // console.log('APP IS LOADING');
      // transition.promise.finally(function() {
      //     controller.set('currentlyLoading', false);
      // });
      return true;
    },

    error: function(error, transition) {
      if (error.status === 0) {
        console.warn("Sorry, but we're having trouble connecting to the server. This problem is usually the result of a broken Internet connection. You can try refreshing this page.");
      } else if (error.status == 403) {
        //go to some default route
        console.warn('error 403');
      } else if (error.status == 401) {
        //handle 401
        console.warn('error 401');
      } else if (error.status == 404) {
        this.transitionTo('error');
      } else {
        console.warn('ERROR', error);
      }
    }
  },

  // TODO: load data afterwards
  afterModel(model) {
    // console.log('afterModel', this, model);
    // window.jj = model
    // model.name = 'that';
    // this.get('odnNetwork').getInfo()
    // .then((Info) => {
    //   console.info('got into', Info);
    //   model.currentBlock = (Info.blocks+20000);
    //   this.set('currentBlock', Info.blocks+20000);
    // });
    //
    // this.get('odnNetwork').getMiningInfo()
    // .then((Mining) => {
    //   console.info('got mine', Mining);
    //   model.networkWeight = Mining.netstakeweight;
    // });
    // this.get('odnDataInfo').set
  }
});
