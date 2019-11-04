import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';

// 使用VUex
Vue.use(Vuex)

// 用到fetch方法的话就自己打开一下注释   不然会报错

/* function fetch(api, callback) {
    // 显示加载中
    axios({
        method: "GET",
        url: "http://localhost:8080" + api,
    }).then(res => {  //接口请求成功执行
        let data = null;
        if (res.data.err === 0) {
            data = res.data.data
        }
        callback && callback(data)
    }).catch(err => {  //接口请求失败执行
        console.log('接口请求异常', err)
    }).then(() => {  //不论接口是否成功都执行
    })
} */

// 创建一个store仓库
const store = new Vuex.Store({
    state: {
       
    },
    mutations: {
       
    },
    actions: {
        
    }
})

export default store
