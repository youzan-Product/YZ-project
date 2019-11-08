<template>
    <el-row>
  <el-col :span="24">
    <div class="grid-content bg-purple-dark">
    <span>订单查询</span>
    <el-button ><i class="fa fa-mortar-board "></i></el-button>
  </div>
  </el-col>
   </el-row>
</template>
<script>
export default {
    
}
</script>
<style lang='scss' scoped>
.el-row {
      &:last-child {
        margin-bottom: 0;
      }
    }
    .el-col {
      border-radius: 4px;
      height: 100%;
      background-color:#fff
      
    }
    .bg-purple-dark {
      background: #fff;
      > span {
        float: left;
        font-size: 14px;
        line-height: 56px;
        margin-left: 20px;
      }
      > .el-button {
        width: 42px;
        height: 30px;
        float: right;
        margin-right: 10px;
        margin-top: 13px;
        vertical-align: baseline;
       }
      }
    
</style>
