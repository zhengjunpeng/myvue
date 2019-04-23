import Vue from 'vue'

// 换行符转换br
Vue.prototype.transferString = function (str) {
  var string = str
  try {
    string = string.replace(/\r\n/g, '<br>')
    string = string.replace(/\n/g, '<br>')
  } catch (e) {
    alert(e.message)
  }
  return string
}

var u = navigator.userAgent
// 是否是iOS
Vue.prototype.isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
// 是否是Android
Vue.prototype.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
function isString (obj) {
  return Object.prototype.toString.call(obj) === '[object String]'
}
Vue.prototype.formatDate = function (dateTime, fmt) { // author: meizz
  var isStr = isString(dateTime)
  if (dateTime !== undefined && dateTime !== '' && dateTime !== null) {
    var time = dateTime
    if (isStr) {
      time = new Date(dateTime.replace(/-/g, '/'))
    } else {
      time = new Date(dateTime)
    }
    var o = {
      'M+': time.getMonth() + 1, // 月份
      'd+': time.getDate(), // 日
      'h+': time.getHours(), // 小时
      'm+': time.getMinutes(), // 分
      's+': time.getSeconds(), // 秒
      'q+': Math.floor((time.getMonth() + 3) / 3), // 季度
      'S': time.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return fmt
  } else {
    return ''
  }
}
Vue.prototype.subDate = function (date, days) {
  var d = new Date(date)
  d.setDate(d.getDate() - days)
  var m = d.getMonth() + 1
  return d.getFullYear() + '-' + m + '-' + d.getDate()
}
