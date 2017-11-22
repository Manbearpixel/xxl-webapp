import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'header',
  classNames: ['header'],
  actions: {
    toggleMobileNav() {
      this.sendAction('toggleMobileNav');
    },

    search(query) {
      this.sendAction("search", query);
    }
  }
});
