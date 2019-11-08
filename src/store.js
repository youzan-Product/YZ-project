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
    }).then(res => {  //接口请求成
        let data = null;
        console.log('res', res)
        if (res.data.err == 0) {
            data = res.data.data
            // console.log('-------------',data)
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
       list:[],
       list2:[]
    },
    mutations: {
       updataList(state,payload){
        //    state.list = payload
        //    console.log(state.list)
        if(payload.msg){
            state.list = payload.msg
        }
        let page = payload.page||1
        let msg = state.list
        state.list2 = msg.slice((page-1)*5,page*5)
       },
       updataListArr(state,payload){
           switch(payload.type){
               case 'insert':
                   state.list.push(payload.item)
                   console.log(payload.item)
                //    console.log(state.list)
             break;
           }
       },
       updataList2(state,payload){
                let arr = []
                // let arr2 = []
                state.list.map((ele)=>{
               if(payload.num == ele.vip && payload.sex == ele.sex){
                   arr.push(ele)                 
               }
              
           })
                state.list2 = arr  
                 console.log(state.list2)
            // arr.map((ele)=>{
            //     if(ele.sex == payload.sex){
            //         arr2.push(ele)
            //     }
            // })
            // state.list2 = arr2
   
       },
    //    updataList3(state,payload){
    //        let arr = []
    //        state.list.map((ele)=>{
    //             if(payload.sex == ele.sex){
    //                arr.push(ele)
    //                console.log(arr)
    //            }              
    //        })
    //        state.list2 = arr  
    //    }

    },
    actions: {
        getList(store){
            fetch('/db/list.json',(data) =>{
                let payload = {
                    page:1,
                    msg:data,
                    num:'',
                    sex:''
                }
                console.log('------------------',data)
                store.commit('updataList',payload)
            })
        },
       
    }
})

export default store
