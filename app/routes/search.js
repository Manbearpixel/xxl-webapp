import Ember from 'ember';

export default Ember.Route.extend({
  odnNetwork: Ember.inject.service(),

  queryParams: {
    query: ''
  },

  beforeModel(model) {
    this._super(...arguments);
    console.log('beforeModel')
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    console.log('setupController')
  },

  model(params) {
    console.log('params', params);
    // let search = this.get('odnNetwork');
    return Ember.RSVP.hash({
      name: 'sample',
      params: params
    }).catch(function(error) {
      // Promise rejected, fulfill with some default value to
      // use as the route's model and continue on with the transition
      console.error("We ran into an issue... monkeys will be dispatched to your location.", error);
      return { msg: 'Recovered from rejected promise', error: error };
    });
  },

  actions: {
    error(reason) {
      // uncaught Error Handling
      console.error("We ran into an issue... monkeys will be dispatched to your location.", reason);

      // transition back to the homepage
      // this.transitionTo('index');

      // bubble this error event:
      // return true;
    }
  }
});
