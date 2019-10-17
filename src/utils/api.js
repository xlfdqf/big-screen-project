import { get, post } from './request'
import QS from 'qs';
// let baseUrl = 'http://api.bzhuan888.com'; //线上
let baseUrl = 'http://qo.bzhuan888.com';  // 测试
//登录
export function getLogin(params) {
    return post(`${baseUrl}/business/login`, params);
}
// 新闻列表
export function getNewsList(params) {
    return post(`${baseUrl}/web/listNews`, params);
}

//新闻详情
export function showNewBeforeModify(params) {
    return get(`${baseUrl}/web/showNewBeforeModify`, params);
}
