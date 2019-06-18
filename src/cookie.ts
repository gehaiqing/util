/**
 * 获取cookie
 * @param name cookie名称
 */
export function getCookie(name: string) {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  const arr = document.cookie.match(reg)
  return arr ? unescape(arr[2]) : null
}

/**
 * 设置cookie
 * @param name 名称
 * @param value 值
 * @param attrs 属性
 */
export function setCookie(name: string, value: string,
  attrs: { path: string, domain?: string, expires?: number | string } = { path: '/' }) {
  if (typeof attrs.expires === 'number') {
    let exdate = new Date()
    exdate.setTime(exdate.getTime() + attrs.expires)
    attrs.expires = exdate.toUTCString()
  }
  let attrsString = Object.keys(attrs).reduce((pre, key) => {
    return pre + `;${key}=${(attrs as any)[key]} `
  }, '')
  document.cookie = `${name}=${escape(value)}${attrsString}`
}

/**
 * 删除cookie
 * @param name cookie名称
 * @param attrs 属性
 */
export function removeCookie(name: string,
  attrs: { path: string, domain?: string, [key: string]: any } = { path: '/' }) {
  setCookie(name, '', { ...attrs, expires: -1 })
}
