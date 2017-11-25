import Ember from 'ember';

export function formatStakingWeight(params/*, hash*/) {
  if (isNaN(params)) { return params; }

  let staking = parseFloat(params / 100000000);
  staking = staking.toFixed(2);
  if (staking > 1000000) {
    staking = staking.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    staking = `${staking} <span class="muted shrink">M</span>`
  }
  return Ember.String.htmlSafe(staking);
}

export default Ember.Helper.helper(formatStakingWeight);
