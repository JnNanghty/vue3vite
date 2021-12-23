/**
 * @description 格式化日期
 * @param date {Date | number} 日期
 * @param format {string} 格式 支持 'yyyy-mm-dd' 'yyyy-mm-dd hh:mm:ss'
 * @return {string} 返回格式化后的日期
 * */
function formatDate(date, format) {
  const _date = new Date(date);
  const _year = _date.getFullYear();
  const _month = _date.getMonth() + 1;
  const _day = _date.getDate();
  const _hour = _date.getHours();
  const _minute = _date.getMinutes();
  const _second = _date.getSeconds();
  let formatDate;
  switch (format) {
    case 'yyyy-mm-dd':
      formatDate = _year + '-' + _month + '-' + _day;
      break;
    case 'yyyy-mm-dd hh:mm:ss':
      formatDate = _year + '-' + _month + '-' + _day + ' ' + _hour + ':' + _minute + ':' + _second;
      break;
    default:
      formatDate = _year + '/' + _month + '/' + _day + ' ' + _hour + ':' + _minute + ':' + _second;
      break;
  }
  return formatDate;
}

export default {
  formatDate
}
