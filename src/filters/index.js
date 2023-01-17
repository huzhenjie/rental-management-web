export function fmtDatetime(ts, fmt) {
  if (!ts || ts <= 0) {
    return '-'
  }
  if (ts < 999999999999) {
    ts *= 1000
  }
  const date = new Date(ts)
  if (!fmt) {
    fmt = 'yyyy-MM-dd hh:mm:ss'
  }
  const month = date.getMonth()
  const o = {
    'M+': month + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((month + 3) / 3),
    'S': date.getMilliseconds(),
    'W': '周' + '日一二三四五六'[date.getDay()]
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (const k in o) { if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
  return fmt
}

export function fmtDate(ts) {
  return fmtDatetime(ts, 'yyyy-MM-dd')
}

export function fenToYuan(valStr, defaultVal = '0.00') {
  const val = parseInt(valStr)
  if (!val) {
    return defaultVal
  }
  return (val / 100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
}

export function fmtMap(val, map, defaultVal = null) {
  if (map[val]) {
    return map[val]
  }
  if (defaultVal !== null) {
    return defaultVal
  }
  return val || ''
}
