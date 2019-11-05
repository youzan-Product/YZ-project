# 一、vue-youzan-project
**有赞账户：13393638004
    密码：qq1234567**

created at 2019-11-4 by 1912

NodeJs + Webpack + Babel + ESLint
Vue + Vue-Router
ES6模块化语法
Vuex + axios + devServer代理
MintUI、Sass、Font-awesome、REM等比缩放布局、meta标签
BestScroll


# 二、Project setup
```
npm install
npm run serve
npm run build
npm run lint
```
# 三、Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 四、图标资源网址
* [Font Awesome 字体](http://fontawesome.dashgame.com/)

# 五、Windows上如何使用命令行杀死指定端口？
* netstat -ano | findstr '端口号'
* taskkill -f -pid '该端口号对应的pid'

# 六、文件夹使用规范

#### 1、所有自行创建的json数据都放在`public/db`文件夹中
#### 2、项目所用的一些图片路径放在`src/assets/images`文件夹中  
* 并通过`src/assets/picture.js`存放调取图片

#### 3、组员项目组件都在`views/`文件夹下自行创建
#### 4、如有共享组件统一放在`components/`文件夹下  方便查找和复用
#### 5、所有路由文件都统一写在`router.js`中
#### 6、数据存放及接口调取统一在`store.js`

# 七、组员分工
* 唐深丽：登录页面、概况页面
* 李铭：商品管理页面
* 孙益柳：订单查询页面
* 刘耀东：客户查询页面