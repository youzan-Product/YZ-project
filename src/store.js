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
        url: "http://localhost:8081" + api,
    }).then(res => {  //接口请求成
        let data = null;
        console.log('res', res)
        if (res.data.err == 0) {
            data = res.data.data
            console.log('-------------', data)
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
        realList: [],
        IndList: [],
        IndList2: [],
        list: [],
        list2: []
    },
    mutations: {
        // 边栏列表
        updateNavList(state, payload) {
            state.navList = payload
        },
        // 实时概况订单列表
        updateRealList(state, payload) {
            state.realList = payload
        },

        //表格
        updateIndList(state, payload) {
            state.IndList = payload
        },
        //分页
        updatePage(state, payload) {
            if (payload.list) {
                state.IndList = payload.list
            }
            let page = payload.page || 1
            let list = state.IndList
            state.IndList2 = list.slice((page - 1) * 5, page * 5)
            console.log('--------', state.IndList2)
        },
        updataList(state, payload) {
            //    state.list = payload
            //    console.log(state.list)
            if (payload.msg) {
                state.list = payload.msg
            }
            let page = payload.page || 1
            let msg = state.list
            state.list2 = msg.slice((page - 1) * 5, page * 5)
        },
        updataListArr(state, payload) {
            switch (payload.type) {
                case 'insert':
                    state.list.push(payload.item)
                    console.log(payload.item)
                    break;
            }
        }
    },
    actions: {
        // 获取边栏列表数据
        getNavList(store) {
            fetch('/db/sideBar.json', (data) => {
                // console.log(data)
                store.commit('updateNavList', data)
            })
        },
        // 获取实时概况订单列表数据
        getRealList(store) {
            fetch('/db/rOrder.json', (data) => {
                console.log(data)
                store.commit('updateRealList', data)
            })
        },
        //获取订单数据
        getIndList(store) {
            fetch('/db/indent.json', (data) => {
                console.log(data)
                store.commit('updateIndList', data)
            })
        },
        //分页
        getPage(store) {
            fetch('/db/indent.json', (data) => {
                console.log(data)
                let payload = {
                    page: 1,
                    list: data
                }
                store.commit('updatePage', payload)
            })
        },
        getList(store) {
            fetch('/db/list.json', (data) => {
                let payload = {
                    page: 1,
                    msg: data
                }
                console.log('------------------', data)
                store.commit('updataList', payload)
            })
        }
    }
})

export default store
