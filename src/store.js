import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

// 使用VUex
Vue.use(Vuex)

// 用到fetch方法的话就自己打开一下注释   不然会报错

function fetch(api, callback) {
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
}

// 创建一个store仓库
const store = new Vuex.Store({
    state: {
        navList: [],
        realList:[],
    },
    mutations: {
        // 边栏列表
        updateNavList(state, payload) {
            state.navList = payload
        },
        // 实时概况订单列表
        updateRealList(state, payload){
            state.realList = payload
        }

    },
    actions: {
        // 获取边栏列表数据
        getNavList(store) {
            fetch('/db/sideBar.json', (data) => {
                console.log(data)
                store.commit('updateNavList', data)
            })
        },
        // 获取实时概况订单列表数据
        getRealList(store) {
            fetch('/db/rOrder.json', (data) => {
                console.log(data)
                store.commit('updateRealList', data)
            })
        }
    }
})

export default store
