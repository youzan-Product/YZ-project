<template>
<el-container>
  <!-- <el-aside width="160px"> -->
    <Sidebar></Sidebar>
  <!-- </el-aside> -->
<el-container>
  
  <el-header>
    <Header></Header>
   </el-header>

     <el-main>
       <Cont></Cont>
      </el-main>
      </el-container>
</el-container>
</template>
<script>
import Sidebar from "@/components/Sidebar.vue"
import Header from "./Header.vue";
import Cont from "./Cont.vue"
export default {
  components: {
    Header,
    Cont,
    Sidebar
  }
};
</script>
<style lang="scss" scoped>
.el-container {
  background: #f7f8fa;
  > .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  > .el-header {
    padding: 0;
    text-align: center;
    line-height: 60px;
    }
    .el-main {
      background-color: #e9eef3;
      color: #333;
      text-align: center;
    }
  
}
</style>
