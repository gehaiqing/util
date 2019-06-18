/**
 * 获取url参数
 * @param name 参数名称
 * @param url 链接地址，默认为当前地址。可以为完整路径，也可以只是参数部分
 */
export function getQueryString(name: string, url?: string) {
  url = url || window.location.href
  let search = url.indexOf('?') > -1 ? url.split('?')[1] : url
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  let r = search.match(reg)
  if (r != null) {
    return decodeURIComponent(r[2])
  }
  return null
}

/**
 * 替换url中的参数
 * @param url 链接。可以为完整路径，也可以只是参数部分
 * @param name 参数名称
 * @param value 参数值
 */
export function replaceQueryString(url: string, name: string, value: string) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  return url.replace(reg, (str, start, val, end) => {
    return start + name + '=' + value + end
  })
}