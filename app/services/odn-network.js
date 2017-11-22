import Ember from 'ember';
import config from '../config/environment';

const XXL_API     = config.APP.ODN_API_XXL;
const SEARCH_API  = config.APP.ODN_API_SEARCH;

const XXL_ROUTES  = {
  info:     'node/info',
  mining:   'node/mining',
  staking:  'node/staking',
  network:  'node/network',
  system:   'system',
  price:    'price'
};

// TODO: all error catches should be rejected and handled properly...
export default Ember.Service.extend({
  applicationName: 'OdnNetwork',

  /*  System Information Routes */
  getInfo: function() {
    // return Ember.$.getJSON(`${API_HOST}/api/info/node`);
    return new Promise((resolve, reject) => {
      Ember.$.getJSON(`${XXL_API}/api/${XXL_ROUTES.info}`)
      .then((Info) => {
        // console.log('GOT info', Info);
        resolve(Info);
      }).catch((error) => {
        // console.log('info error', error);
        resolve('error grabbing info');
      });
    });
  },

  getMiningInfo: function() {
    // return Ember.$.getJSON(`${API_HOST}/api/info/mining`);
    return new Promise((resolve, reject) => {
      Ember.$.getJSON(`${XXL_API}/api/${XXL_ROUTES.mining}`)
      .then((Mining) => {
        // console.log('GOT mining', Mining);
        resolve(Mining);
      }).catch((error) => {
        // console.log('mining error', error);
        resolve('error grabbing mining');
      });
    });
  },

  getStakingInfo: function() {
    // return Ember.$.getJSON(`${API_HOST}/api/info/staking`);
    return new Promise((resolve, reject) => {
      Ember.$.getJSON(`${XXL_API}/api/${XXL_ROUTES.staking}`)
      .then((Staking) => {
        // console.log('GOT staking', Staking);
        resolve(Staking);
      }).catch((error) => {
        // console.log('staking error', error);
        resolve('error grabbing staking');
      });
    });
  },

  getNetworkInfo: function() {
    // return Ember.$.getJSON(`${API_HOST}/api/info/network`);
    return new Promise((resolve, reject) => {
      Ember.$.getJSON(`${XXL_API}/api/${XXL_ROUTES.network}`)
      .then((Network) => {
        // console.log('GOT network', Network);
        resolve(Network);
      }).catch((error) => {
        // console.log('network error', error);
        resolve('error grabbing network');
      });
    });
  },

  getSystemInfo: function() {
    return new Promise((resolve, reject) => {
      Ember.$.getJSON(`${XXL_API}/api/${XXL_ROUTES.system}`)
      .then((System) => {
        // console.log('GOT system', System);
        System.storageLeft  = (System.storage.size - System.storage.used);
        System.memoryLeft   = (System.mem.total- System.mem.available);
        resolve(System);
      }).catch((error) => {
        // console.log('system error', error);
        resolve('error grabbing system');
      });
    });
  },

  getPriceInfo: function() {
    return new Promise((resolve, reject) => {
      Ember.$.getJSON(`${XXL_API}/api/${XXL_ROUTES.price}`)
      .then((Price) => {
        // console.log('GOT price', Price);
        resolve(Price.response);
      }).catch((error) => {
        // console.log('price error', error);
        resolve('error grabbing price');
      });
    });
  },


  /*  Search Routes */

  /* API runs a search for a mixed query
      - Accepts block (height/hash)
      - Transaction hash
      - Address key
  */
  runSearch: (query) => {
    return new Promise((resolve, reject) => {
      Ember.$.getJSON(`${SEARCH_API}/search/${query}`)
      .then((Search) => {
        resolve(Search);
      })
      .catch(reject);
    });
  },

  /* Fetch block details related to a block_id
      - Accepts Block Height (123)
      - Accepts Block Hash (1a2b3c)
  */
  fetchBlock: function(block_id) {
    return Ember.$.getJSON(`${SEARCH_API}/api/block/${block_id}`);
  },

  /* Fetch transaction details related to a txid */
  fetchTransaction: function(txid) {
    return Ember.$.getJSON(`${SEARCH_API}/api/transaction/${txid}`);
  },

  /* Fetch address details related to an address key */
  fetchAddress: function(address) {
    return Ember.$.getJSON(`${SEARCH_API}/api/address/${address}`);
  }
});
