import { weeks } from './constant';

/**
*  生成随机id
*/
export const guid = (num = 36) => Math.random().toString(num).substr(2);

/**
* 实现数组对象某一项(数组)累加
*/
export const totalArrItem = (arr, key = undefined) => {
    return arr.reduce((total, itm) => total + (!!key ? Number(itm[key]) : Number(itm)), 0);
}

/**
* 判断一个数组里任何两项加起来是否等于一个值
*/

export const isSumIncludesArr = (arr, sum) => {
    return arr.some((set => itm => set.has(itm) || !set.add(sum - itm))(new Set))
}

/**
*  判断是否一个空对象
*/
export const isNullObject = obj => {
    return obj.constructor === Object ? !!Object.keys(obj).length : false;
}

/**
*  离今天相差多少天
*/

export const differDay = (endStr, startStr) => {
    const startTime = (startStr && new Date(startStr)) || new Date();
    const endTime = new Date(endStr);
    const daySeconds = 1000 * 60 * 60 * 24;
    const day = Math.ceil((endTime - startTime) / daySeconds);
    return day;
}


/**
*  当前日期时间 星期几
*/

export const nowDayTime = () => {
    const now = new Date();
    const year = now.getFullYear(); //得到年份
    const month = now.getMonth();//得到月份
    const day = now.getDate();//得到日期

    const hours = now.getHours();//得到小时
    const minutes = now.getMinutes();//得到分钟
    const seconds = now.getSeconds();//得到秒

    const week = weeks[now.getDay()];//得到周几

    if (month < 10) month = "0" + month;
    if (date < 10) date = "0" + date;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    time = `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${week}`;
    return time;
}

/**
解析带有？的路由把 a=b 变成 a: b 
*/

const urlEqualSign = url => {
    const urlArr = url.split('?');
    const urlStr = urlArr[urlArr.length - 1];
    const equalArr = urlStr.split('&');
    const equalSignObj = urlEqualSignObj(equalArr);
    return equalSignObj;
}

const urlEqualSignObj = equalArr => {
    const obj = {};
    equalArr.forEach(itm => {
        const equalStr = itm.split('=');
        const [firstKey, secondKey] = equalStr;
        obj[firstKey] = equalStr[secondKey];
    })
    return obj;
}