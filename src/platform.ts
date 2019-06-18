/**
 * 是否在微信中
 */
export function isWx(): boolean {
  return navigator.userAgent.indexOf('MicroMessenger') > -1
}