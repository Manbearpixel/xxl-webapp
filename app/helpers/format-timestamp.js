import Ember from 'ember';

// 1 Byte = 8 Bit
// 1 Kilobyte = 1,024 Bytes
// 1 Megabyte = 1,048,576 Bytes
// 1 Gigabyte = 1,073,741,824 Bytes
// 1 Terabyte = 1,099,511,627,776 Bytes
const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export function formatTimestamp([timestamp] /*, namedArgs*/) {
  if (isNaN(timestamp)) {
    return 'NaN';
  }

  timestamp = timestamp * 1000;
  let _date = new Date(timestamp);

  let minutes = _date.getMinutes();
  if (minutes < 10) { minutes = `0${minutes}`; }
  let period  = (_date.getHours() > 12) ? 'pm' : 'am';
  let hours   = _date.getHours();
  if (hours > 12) { hours -= 12; }

  let timeStr = `<span class="shrink muted xx-sm-block">${hours}:${minutes} ${period}`;
  let dateStr = `${Months[_date.getMonth()]} ${_date.getDate()}, ${_date.getFullYear()}`;
  return Ember.String.htmlSafe(`${dateStr} ${timeStr}`);
}

export default Ember.Helper.helper(formatTimestamp);
