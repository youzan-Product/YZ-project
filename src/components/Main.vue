<template>
  <div class="main_con">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "main",
  components: {}
};
</script>

<style lang="scss" scoped>
.main_con{
  min-width: 1000px;
}
</style>

