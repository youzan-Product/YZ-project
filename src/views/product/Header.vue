<template lang="html">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">销售中</el-menu-item>
        <el-menu-item index="2">已售罄</el-menu-item>
        <el-menu-item index="3">仓库中</el-menu-item>
    </el-menu>
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

</style>
