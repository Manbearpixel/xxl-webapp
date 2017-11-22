
import Ember from 'ember';
let inject = Ember.inject;

// ODN: Ember.inject.service('odn-network');
// let odnNetwork = Ember.inject.service()

// console.log('odn', odnNetwork.get('sample'));

// let url = "http://localhost:3031/getblock.json";
// let data = {}
// Ember.$.getJSON(url).then(function(res) {
//   console.log('data', res);
//   data = res;
// });

export default Ember.Route.extend({
  // console.log('ember', Ember.$)
  // $.get("http://localhost:3031/getblock.json").then((response) => {
  //   console.log('response', response);
  // });
  // start: inject.service(),
  // message: 'foo',
  //
  // model() {
  //   // console.log('odnNetwork', odnNetwork, odnNetwork.sample),
  //   // console.log(this.get('odnNetwork.sample'));
  //   let odn_data = this.get('start').getInfo(this);
  //   return {
  //     message: this.get('message'),
  //     auth: this.get('start').isAuthenticated,
  //     test: this.get('start').thisistest(),
  //     odnInfo: odn_data
  //   }
  // },
  //
  // actions: {
  //   pressMe() {
  //     var testText = this.get('start').thisistest();
  //     console.log('BEFORE', this.get('message'));
  //     console.log('setting...', testText);
  //     this.set('message', testText);
  //     console.log('AFTER', this.get('message'));
  //     this.refresh();
  //   }
  // }

});
