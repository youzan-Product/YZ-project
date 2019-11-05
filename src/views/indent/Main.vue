<template>
    <div class="box">
      <Search></Search>
      <Table></Table>
    </div>
</template>
<script>
import Search from "./Search"
import Table from "./Table"
export default {
    components:{
        Search,
        Table
    }
}
</script>
<style lang='scss' scoped>
.box {
        background: #fff;
        height: 500px;
        padding: 20px;
      }
</style>
