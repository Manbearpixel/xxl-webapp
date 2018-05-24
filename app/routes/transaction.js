import Ember from 'ember';

let searchTransaction = (_txid, odnNetwork) => {
  return new Ember.RSVP.Promise((resolve, reject) => {
    console.log('fetchTransaction', _txid);

    odnNetwork.fetchTransaction(_txid)
    .then((response) => {

      console.log('response get!', response);
      if (response.status === 'ok') { resolve(response.tx); }
      else if (response.status == 'error') { reject(response.error); }
      else { reject('An error occurred communicating with the network.'); }
    }).catch(reject);
  });
};

export default Ember.Route.extend({
  odnNetwork: Ember.inject.service(),

  model(params) {
    console.log(params);
    // let search = this.get('odnNetwork').getInfo();
    return Ember.RSVP.hash({
      params: params,
      name: 'sample',
      response: searchTransaction(params.txid, this.get('odnNetwork'))
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
