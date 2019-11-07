<template>
    <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
            <router-link to="/general" tag="div">
                <div class="boun_mune">返回概况</div>
            </router-link>
        </el-dropdown-item>
        <el-dropdown-item>
            <div class="boun_mune">切换店铺</div>
        </el-dropdown-item>
        <el-dropdown-item>
            <div class="shop boun_mune">
                <div>喵玖小店</div>
                <span>
                    <div>访问店铺</div>
                    <i class="el-icon-arrow-right"></i>
                </span>
            </div>
        </el-dropdown-item>
        <el-dropdown-item>
            <div class="boun_mune">有赞首页</div>
        </el-dropdown-item>
        <el-dropdown-item>
            <div class="number boun_mune">
                <div>
                    <span>1331234567</span>
                    <span>+86-1331234567</span>
                </div>
                <div>
                    <i class="el-icon-arrow-right"></i>
                </div>
            </div>
        </el-dropdown-item>
        <el-dropdown-item>
            <router-link to="/login" tag="div">
                <div class="exit boun_mune">
                    <div>退出登录</div>
                    <i class="el-icon-error"></i>
                </div>
            </router-link>

        </el-dropdown-item>
    </el-dropdown-menu>
</template>

<script>
export default {
  name: "dropdown"
};
</script>

<style lang="scss" scoped>
.boun_mune {
  height: 48px;
  width: 300px;
  line-height: 48px;
  font-size: 15px;
  box-sizing: border-box;
  border-bottom: 1px dashed #ccc;
}
.shop {
  line-height: 48px;
  height: 48px;
  > div {
    float: left;
  }
  > span {
    float: right;
    line-height: 48px;
    height: 48px;
    > div {
      margin-right: 10px;
      float: left;
    }
    > i {
      height: 48px;
      line-height: 48px;
      float: right;
      margin: 0;
      padding: 0;
    }
  }
}
.exit {
  > div {
    float: left;
    line-height: 48px;
    height: 48px;
  }
  > i {
    float: right;
    line-height: 48px;
    height: 48px;
    float: right;
    margin: 0;
    padding: 0;
  }
}
.number {
  height: 60px;
  > div:nth-child(1) {
    float: left;
    > span {
      height: 30px;
      line-height: 30px;
      display: block;
    }
    > span:nth-child(1) {
      font-weight: bold;
    }
  }
  > div:nth-child(2) {
    float: right;
    line-height: 60px;
    > i {
      margin: 0;
      padding: 0;
    }
  }
}
</style>

