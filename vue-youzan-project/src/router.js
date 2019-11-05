import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 引入路由文件
import General  from '@/views/home/General .vue'
import Indent from '@/views/indent/Indent.vue'


// 创建所需路由
const router = new VueRouter({
    routes: [
        {
            path:"/home",
            component:General 
        },
        {
            path:'/indent',
            component:Indent
        }
    ]
})
// 抛出路由
export default router;