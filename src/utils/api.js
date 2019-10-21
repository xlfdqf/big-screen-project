import { get, post } from './request'
import QS from 'qs';
const api = process.env.NODE_ENV == "development" ? 'api' : '';
//登录
export function getLogin(params) {
    return post(`${api}/business/login`, params);
}
// 新闻列表
export function getNewsList(params) {
    return post(`${api}/web/listNews`, params);
}

//新闻详情
export function showNewBeforeModify(params) {
    return get(`${api}/web/showNewBeforeModify`, params);
}
