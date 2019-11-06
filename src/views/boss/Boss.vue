<template>
  <div class="boss">
      <Add></Add>
      <BossTotle></BossTotle>
      <Tab></Tab>
      <Chock></Chock>

  </div>
</template>

<script>
import Add from './Add.vue'
import BossTotle from './BossTotle.vue'
import Tab from './Tab.vue'
import Chock from './Chock.vue'
export default {
    components:{
        Add,
        BossTotle,
        Tab,
        Chock
    }
}
</script>

<style lang='scss' scoped>
    .boss{
        margin:16px;
        padding:16px;
        .block{
            margin-bottom:24px;

        }
    }
</style>