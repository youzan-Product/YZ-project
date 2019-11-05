<template>
  <div id="app">

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
</template>

<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Main from "@/components/Main.vue";

export default {
  name: "app",
  components: {
    Header,
    Sidebar,
    Main
  }
};
</script>

<style>
html,
body,
div,
span,
i,
p,
a,
img,
ul,
li {
  margin: 0;
  padding: 0;
}
i {
  font-style: normal;
}
a {
  display: inline-block;
  text-decoration: none;
}
ul,
li {
  list-style: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-header {
  width: 100%;
  background-color: #fff7cc;
  color: #333;
  text-align: center;
}
</style>
