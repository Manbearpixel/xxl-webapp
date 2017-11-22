import Ember from 'ember';

export function formatUnix(unix/*, hash*/) {
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  var date = new Date(unix*1000);
  return `${(date.getMonth() + 1)}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}

export default Ember.Helper.helper(formatUnix);
