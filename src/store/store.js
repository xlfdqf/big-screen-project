import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        type: 1,
        someNo: localStorage.getItem("someNo"),
        Token: '',
        companyName: localStorage.getItem("companyName"),
        tel: localStorage.getItem("tel"),
        headImg: localStorage.getItem("headImg"),
        userNo: localStorage.getItem("userNo"),
        newNo: localStorage.getItem("newNo"),
    },
    mutations: {
        show(state, params) {
            state.type = params.type;
            state.someNo = params.someNo;
            localStorage.setItem("someNo", params.someNo);
        },
        SET_TOKEN(state, params) {
            state.Token = params.Token;
            state.companyName = params.companyName;
            state.tel = params.tel;
            state.headImg = params.headImg;
            state.userNo = params.userNo;
            localStorage.setItem("Token", params.Token);
            localStorage.setItem("companyName", params.companyName);
            localStorage.setItem("tel", params.tel);
            localStorage.setItem("headImg", params.headImg);
            localStorage.setItem("userNo", params.userNo);
        },
        // // 清除本地数据
        // removeLocalStorage(state, params) {
        //     localStorage.removeItem('Token');
        //     // localStorage.removeItem('Token');
        // }
        setNewsNo(state, params) {
            state.newNo = params;
            localStorage.setItem("newNo", params);

        }

    },
})
