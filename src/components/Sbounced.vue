<template>
    <el-dropdown>
        <span class="el-dropdown-link">
            <div class="logo"></div>
        </span>
        <div>
          <Dropdown></Dropdown>
        </div>
    </el-dropdown>
</template>

<script>
import Dropdown from "./Dropdown.vue"
export default {
  name: "bounced",
  components:{
    Dropdown
  }
};
</script>

<style lang="scss" scoped>
.el-dropdown {
  height: 56px;
  width: 92px;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(83, 83, 83);
  .el-dropdown-link {
    cursor: pointer;
    .logo {
      width: 32px;
      height: 32px;
      background: #fff
        url("https://img.yzcdn.cn/public_files/2016/05/13/8f9c442de8666f82abaf7dd71574e997.png!60x60.jpg")
        no-repeat;
      background-size: 32px 32px;
      border-radius: 50%;
      margin: 12px auto 0;
    }
  }
}
</style>

