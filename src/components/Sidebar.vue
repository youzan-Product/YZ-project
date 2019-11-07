<template>
  <div class="sidebar">
      <Sbounced></Sbounced>

      <!-- <div class="logo"></div> -->

    <div v-for="(item,idx) in navList" :key="idx">
      <router-link :to="item.path" active-class="nav_on" tag="span">
        <li class="nav">
          <i :class="item.iconName"></i>
          <span v-text="item.navName">概况</span>
        </li>
      </router-link>
    </div>
    <div class="barBottom">
      <i class="el-icon-search"></i>
      <i class="el-icon-chat-dot-square"></i>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import Sbounced from "./Sbounced.vue";
export default {
  name: "sidebar",
  components: {
    Sbounced
  },
  computed: {
    ...mapState(["navList"])
  },
  mounted() {
    this.getNavList();
  },
  methods: {
    ...mapActions(["getNavList"]),
    ...mapMutations(["updateNavList"])
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  // height: 100%;
  // width: 92px;
  background-color: #444;
  // cursor: pointer;
  // .logo_wrap {
  //   height: 56px;
  //   width: 60px;
  //   margin: 0px 16px;
  //   .logo {
  //     width: 32px;
  //     height: 32px;
  //     background: #fff
  //       url("https://img.yzcdn.cn/public_files/2016/05/13/8f9c442de8666f82abaf7dd71574e997.png!60x60.jpg")
  //       no-repeat;
  //     background-size: 32px 32px;
  //     border-radius: 50%;
  //     margin: 12px auto 0;
  //   }
  // }
  .nav {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #c8c9cc;
    text-align: center;
    i {
      width: 18px;
      width: 18px;
      margin-right: 4px;
    }
  }
  .nav:hover {
    background: rgba(102, 102, 102, 1);
    color: white;
  }
  .nav_on .nav {
    background: #fff;
    color: #333;
  }
  .barBottom {
    width: 100%;
    height: 42px;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    background: rgb(83, 83, 83);
    line-height: 42px;
    i {
      width: 50%;
      height: 21px;
      line-height: 21px;
      color: #c8c9cc;
      border-right: 1px solid #ccc;
      box-sizing: border-box;
    }
    i:nth-child(2) {
      border-right: 0px;
    }
  }
}
</style>

