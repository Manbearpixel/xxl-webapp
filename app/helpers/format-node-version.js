import Ember from 'ember';

export function formatNodeVersion(params/*, hash*/) {
  if (typeof params !== 'string') {
    params = params[0];
  }
  
  try {
    let _v = params.split('-');
    return _v[0];
  } catch (e) {
    console.log(e);
    return '';
  }
}

export default Ember.Helper.helper(formatNodeVersion);
