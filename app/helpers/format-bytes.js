import Ember from 'ember';

// 1 Byte = 8 Bit
// 1 Kilobyte = 1,024 Bytes
// 1 Megabyte = 1,048,576 Bytes
// 1 Gigabyte = 1,073,741,824 Bytes
// 1 Terabyte = 1,099,511,627,776 Bytes

export function formatBytes([bytes], namedArgs/*, hash*/) {
  bytes = parseInt(bytes);

  let i = -1;
  let byteUnits = ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  do {
    bytes = bytes / 1024;
    i++;
  } while (bytes > 1024);

  let byteAmount = Math.max(bytes, 0.1).toFixed(1);
  let byteUnit = byteUnits[i];

  if (namedArgs.unitWrap) {
    return Ember.String.htmlSafe(`${byteAmount} <span class="shrink muted">${byteUnit}</span>`);
  }
  return `${byteAmount} ${byteUnit}`;
}

export default Ember.Helper.helper(formatBytes);
