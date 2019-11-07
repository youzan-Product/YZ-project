<template>
  <div id="app">
<<<<<<< HEAD
 <!-- 用户未登录 -->
    <div v-if='$route.path === "/login"'>
      <router-view name='login'></router-view>
    </div>
    <!-- 用户已登录 -->
    <div v-else>
      <el-container>
        <el-aside width='92px'>
          <Sidebar></Sidebar>
        </el-aside>

        <el-container>
          <el-header>
            <Header></Header>
          </el-header>
          
          <el-main>
            <Main></Main>
          </el-main>
        </el-container>
      </el-container>
    </div>
</div>
=======

    <router-view></router-view>
  </div>
>>>>>>> test
</template>

<script>


export default {
  name: 'app',
  components: {
<<<<<<< HEAD
    Header,
    Sidebar,
    Main
  },
  data: function() {
    return {
      isLogin: true
    }
  },
  mounted() {
    console.log(this.$route)
  },
};
=======

  }
}
>>>>>>> test
</script>

<style>
html,body,div,span,i,p,a,img,ul,li{
  margin: 0;
  padding: 0;
}
i{
  font-style: normal;
}
a{
  display:inline-block;
  text-decoration: none;
}
ul,li{
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
<<<<<<< HEAD
.el-header {
  width: 100%;
  background-color: #fff7cc;
  color: #333;
  text-align: center;
}
.el-main{
  background: rgb(247,248,250);
}
=======
>>>>>>> test
</style>
