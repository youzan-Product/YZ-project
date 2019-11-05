<template lang="html">
    <el-container>
        <div>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    </el-container>
</template>

<script>
import Header from './Header.vue'
import Main from './Main.vue'
import Footer from './Footer.vue'
export default {
    components:{
        Header,
        Main,
        Footer
    }
};
</script>

<style lang="scss" scoped>
  body > .el-container {
    margin-bottom: 40px;
  }
</style>
