import Ember from 'ember';

let searchAddress = (_address, odnNetwork) => {
  return new Ember.RSVP.Promise((resolve, reject) => {

    odnNetwork.fetchAddress(_address)
    .then((data) => {

      if (data.status == 'success') { resolve(data.response); }
      else if (data.status == 'error') { reject(data.error); }
      else { reject('An error occurred communicating with the network.'); }
    }).catch(reject);
  });
};

export default Ember.Route.extend({
  odnNetwork: Ember.inject.service(),

  model(params) {
    return Ember.RSVP.hash({
      params: params,
      name: 'sample',
      response: searchAddress(params.address_key, this.get('odnNetwork'))
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
      this.transitionTo('index');

      // bubble this error event:
      // return true;
    }
  }
});
