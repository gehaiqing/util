"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    return (arr = document.cookie.match(reg)) ? unescape(arr[2]) : null;
}
exports.getCookie = getCookie;
