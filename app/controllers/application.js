import Ember from 'ember';
import config from '../config/environment';


export default Ember.Controller.extend({
  odnNetwork: Ember.inject.service(),

  xxlVersion:         config.version,
  isSearching:        false,
  isMobileNavActive:  false,

  // currentPathDidChange: function() {
  //   Ember.run.schedule('afterRender', this, function() {
  //   });
  // },

  actions: {
    search(query) {
      if (this.get('isSearching') === false) {
        this.toggleProperty('isSearching');

        this.get('odnNetwork').runSearch(query)
        .then((Search) => {
          if (Search.status == 'success') {
            if (Search.response.search_type === 'block') {
              this.transitionToRoute('block', query);
            }
            else if (Search.response.search_type === 'transaction') {
              this.transitionToRoute('transaction', query);
            }
            else if (Search.response.search_type === 'address') {
              this.transitionToRoute('address', query);
            }
            else {
              this.transitionToRoute('search', {queryParams: {
                query: query
              }});
            }

            Ember.run.later((() => {
              console.log('finished search');
              this.toggleProperty('isSearching');
            }), 2000);
          }
          else if (Search.status == 'error') {
            this.transitionToRoute('search', {queryParams: {
              query: query
            }});

            Ember.run.later((() => {
              this.toggleProperty('isSearching');
            }), 2000);
          }
        }).catch((error) => {
          console.warn('Search error occurred', error);

          Ember.run.later((() => {
            this.toggleProperty('isSearching');
          }), 2000);
        });
      }
    },

    toggleMobileNav(ref) {
      this.toggleProperty('isMobileNavActive');
      if (this.get('isMobileNavActive') === true) {
        $('body').addClass('nav-open');
      }
      else {
        $('body').removeClass('nav-open');
      }
    }
  }
});
