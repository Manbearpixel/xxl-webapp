import Ember from 'ember';

export default Ember.Route.extend({
  odnNetwork: Ember.inject.service(),

  model() {
    return Ember.RSVP.hash({
      systemInfo:     this.get('odnNetwork').getSystemInfo(),
      odnDataInfo:    this.get('odnNetwork').getInfo(),
      odnDataStaking: this.get('odnNetwork').getStakingInfo(),
      odnDataNetwork: this.get('odnNetwork').getNetworkInfo()
    });
  },

  actions: {
    loading(transition, originRoute) {
      // let controller = this.controllerFor('foo');
      // controller.set('currentlyLoading', true);
      // console.log('INDEX IS LOADING');
      // transition.promise.finally(function() {
      //     controller.set('currentlyLoading', false);
      // });
      return true;
    },

    error(error, transition) {
      console.warn('INDEX ERROR', error);
      return true;
    }
  },

  events: {
    error: function (reason, transition) {
      console.warn('Index Error!');
      console.warn('Reason', reason);
    }
  }
});
