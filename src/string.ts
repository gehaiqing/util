/**
 * 将字符串转为html片段
 * @param str
 */
export function text2html(str:string) {
    let div = document.createElement('div')
    div.innerHTML = str
    div.remove()
    return div.innerText || div.textContent
}

/**
 * 去除字符串中的emoji表情
 * @param str
 */
export function removeEmoji(str:string):string {
    let ranges = [
        '\ud83c[\udf00-\udfff]',
        '\ud83d[\udc00-\ude4f]',
        '\ud83d[\ude80-\udeff]'
    ]
    return str.replace(new RegExp(ranges.join('|'), 'g'), '')
}