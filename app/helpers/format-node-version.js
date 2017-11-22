import Ember from 'ember';

export function formatNodeVersion(params/*, hash*/) {
  if (typeof params !== 'string') {
    params = params[0];
  }

  let _v = params.split('-');
  return _v[0];
}

export default Ember.Helper.helper(formatNodeVersion);
