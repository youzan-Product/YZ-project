<template>
    <div class="box1">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="全部" name="first">全部</el-tab-pane>
    <el-tab-pane label="待付款" name="second">待付款</el-tab-pane>
    <el-tab-pane label="待发货" name="third">待发货</el-tab-pane>
    <el-tab-pane label="已发货" name="fourth">已发货</el-tab-pane>
    <el-tab-pane label="已完成" name="fifth">已完成</el-tab-pane>
    <el-tab-pane label="已关闭" name="sixth">已关闭</el-tab-pane>
    <el-tab-pane label="退款中" name="seventh">退款中</el-tab-pane>
  </el-tabs>
    </div>
</template>
<script>
export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<style lang='scss' scoped>

</style>
