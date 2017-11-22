import Ember from 'ember';

export function formatCurrency(value, namedArgs/*, hash*/) {
  let decimalPlaces = namedArgs.decimals === undefined ? 2 : namedArgs.decimals;

  return Math.abs(value).toFixed(decimalPlaces);
}

export default Ember.Helper.helper(formatCurrency);
