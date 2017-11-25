import Ember from 'ember';

export function formatStakingTime(expectedStakingTime/*, hash*/) {
  let stakeTime = parseInt(expectedStakingTime);
  if (isNaN(stakeTime)) {
    return expectedStakingTime;
  }

  let duration = moment.duration(stakeTime, 'seconds');
  return duration.humanize(true);
}

export default Ember.Helper.helper(formatStakingTime);
