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
 *  设置cookie
 * @param name 名称
 * @param value 值
 * @param expiredays  过期时间，单位为`天`. 默认为会话周期
 * @param path 路径，默认为`/`
 */
export function setCookie(name: string, value: string, expiredays?:number, path:string = '/') {
    let expires = ''
    if (expiredays) {
        let exdate = new Date()
        exdate.setDate(exdate.getDate() + expiredays)
        expires = `;expires=${exdate.toUTCString()}`
    }
    document.cookie = `${name}=${escape(value)};path=${path};${expires}`
}

/**
 * 删除cookie
 * @param name 名称
 * @param path 路径，默认为`/`
 */
export function delCookie(name: string, path:string = '/') {
    let exdate = new Date()
    exdate.setDate(exdate.getDate() - 1)
    document.cookie = `${name}=${getCookie(name)};path=${path};expires=${exdate.toUTCString()};`
}
