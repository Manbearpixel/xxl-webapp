import Ember from 'ember';

export function incrementIndex(params/*, hash*/) {
  return parseInt(params) + 1;
}

export default Ember.Helper.helper(incrementIndex);
