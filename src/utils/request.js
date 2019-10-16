import axios from 'axios'
// import QS from 'qs';
import { Loading, Message } from 'element-ui';  //element库的消息提示，可以不用
import store from '@/store/store'

// 环境的切换
// if (process.env.NODE_ENV == 'development') { //开发
//     axios.defaults.baseURL = 'http://qo.bzhuan888.com';
// }
// else if (process.env.NODE_ENV == 'debug') { //测试
// 	axios.defaults.baseURL = 'https://www.ceshi.com';
// }
// else if (process.env.NODE_ENV == 'production') { //线上
// 	axios.defaults.baseURL = 'https://www.production.com';
// }

// 请求超时时间
axios.defaults.timeout = 15000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// console.log(store.state.Token)
// 请求拦截器
axios.interceptors.request.use(
    config => {
        // 每次发送请求之前判断vuex中是否存在token        
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        // const token = store.state.Token;
        const token = localStorage.getItem('Token')
        if (token) {
            config.headers.Token = token;
        }
        return config;
    },
    error => {
        return Promise.error(error);
    });
// 响应拦截器
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是200的情况
    error => {
        if (error.response.code) {
            switch (error.response.code) {
                // 102 Token过期
                // 清除本地Token和清空vuex中Token对象               
                case 103:
                    Message({
                        showClose: true,
                        message: '登录过期，请重新登录!',
                        type: "warning"
                    });
                    // 清除Token
                    localStorage.removeItem('Token');
                    store.commit('removeLocalStorage', null);
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
                    setTimeout(() => {
                        router.replace({
                            path: '/login',
                            query: {
                                redirect: router.currentRoute.fullPath
                            }
                        });
                    }, 1000);
                    break;

                // 其他错误，直接抛出错误提示
                default:
                    Message({
                        showClose: true,
                        message: error.response.message,
                        type: "warning"
                    });
                    // 清除Token
                    localStorage.removeItem('Token');
                    store.commit('removeLocalStorage', null);
            }
            return Promise.reject(error.response);
        }
    }
);

export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, { params })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                if (!err.response) {
                    Message({
                        showClose: true,
                        message: 'get请求错误',
                        type: 'error'
                    });
                } else {
                    reject(err.data);
                    console.log(err.response, '异常');
                }
            })
    });
}

export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                if (!err.response) {
                    Message({
                        showClose: true,
                        message: 'post请求错误',
                        type: 'error'
                    });
                } else {
                    reject(err.data);
                    console.log(err.response, '异常');
                }
            })
    });
}

export default axios