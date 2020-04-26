/**
 * 秒级时间戳、毫秒级时间戳、日期对象 格式化时间
 *
 * @export
 * @param date
 * @param fmt
 * @returns string
 */
export function dateFormat(date, fmt = 'yyyy-MM-dd hh:mm:ss') {
    const weeks = ['日','一','二','三','四','五','六','日']
    let type = Object.prototype.toString.call(date);
    if (type !== '[object Number]' && type !== '[object Date]') return;
    if (type === '[object Number]') date = new Date(Number(date).toString().length === 10 ? date * 1000 : date);

    let o = {
        'M+': date.getMonth() + 1, //月份
        'd+': date.getDate(), //日
        'h+': date.getHours(), //小时
        'm+': date.getMinutes(), //分
        's+': date.getSeconds(), //秒
        'W+': weeks[date.getDay()], // 周几 汉字
        'w+': date.getDay(), // 周几 数字
        'q+': Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds(), //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (let k in o) if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    return fmt;
}

/**
 * 判断数据类型
 *
 * @export
 * @param data
 * @returns string
 */
export function types(data) {
    let toString = Object.prototype.toString;
    let map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object',
        '[object Arguments]': 'arguments',
        '[object Error]': 'error',
        '[object Window]': 'Window',
        '[object HTMLDocument]': 'document',
        '[object Map]': 'map',
        '[object Set]': 'set',
        '[object WeakMap]': 'weakMap'
    };
    return data instanceof Element ? 'element' : map[toString.call(data)];
}

/**
 * 验证手机号格式是否正确
 *
 * @export
 * @param phone  手机号
 * @returns boolean
 */
export function checkMobile(phone) {
    let reg = /^1\d{10}$/;
    return !!reg.test(phone);
}

/**
 * 验证邮箱格式是否正确
 *
 * @export
 * @param email  邮箱
 * @returns boolean
 */
export function checkEmail(email) {
    // eslint-disable-next-line
    let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    return !!reg.test(email);
}

/**
 * 验证密码格式是否正确 （必须为 6-20 个字符，而且同时包含字母和数字）
 *
 * @export
 * @param {number} password  密码
 * @returns
 */
export function checkPassword(password) {
    let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
    return !!reg.test(password);
}

/**
 * 生成随机数
 *
 * @export
 * @param {number} n  随机数位数
 * @returns
 */
export function createRandomNum(n) {
    let rnd = '';
    for (let i = 0; i < n; i++) {
        rnd += Math.floor(Math.random() * 10);
    }
    return parseInt(rnd, 10);
}

/**
 * @description 生成uuid
 */
export function createUuid() {
    let d = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
}

/**
 * @description 判断运行环境
 */
export function browserInfo() {
    let ua = navigator.userAgent;
    return {
        isAndroid: Boolean(ua.match(/android/gi)),
        isIphone: Boolean(ua.match(/iphone|ipod/gi)),
        isIpad: Boolean(ua.match(/ipad/gi)),
        isWeixin: Boolean(ua.match(/MicroMessenger/gi)),
        isAli: Boolean(ua.match(/AlipayClient/gi)),
        isPhone: Boolean(/(iPhone|iPad|iPod|iOS|Android)/i.test(ua)),
        isApp: Boolean(/(zwwl-ios|zwwl-android)/i.test(ua))
    };
}

/**
 * @description 全层蒙版
 */
export function createFullMask(delay = 1000) {
    const body = document.getElementsByTagName('body')[0];
    const fullmask = document.createElement('div');
    fullmask.style.cssText = 'z-index: 99999999;position: fixed;top: 0;bottom: 0;left: 0;right: 0;background: #ffffff;opacity: 0;';
    body.appendChild(fullmask);
    setTimeout(function() {
        fullmask.parentNode.removeChild(fullmask);
    }, delay);
}
