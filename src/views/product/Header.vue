<template lang="html">
    <div class="head">
        <div class="hearder_info">
            <i></i>
            <span>为了营造绿色健康的购物环境，更好地保障消费者利益，我们将于2019年10月31日起下线“跳转到其他网站购买”功能。</span>
            <span>查看详情</span>
        </div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">销售中</el-menu-item>
          <el-menu-item index="2">已售罄</el-menu-item>
          <el-menu-item index="3">仓库中</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
};
</script>

<style lang="scss" scoped>
 .head{
    .header_info{
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    padding: 20px;
    background: rgb(255,245,237);
    border:1px solid rgb(241,146,78);
  }
 }
</style>
