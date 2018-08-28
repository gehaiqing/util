export function getCookie(name: string) {
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    const arr = document.cookie.match(reg)
    return arr ? unescape(arr[2]) : null
}
