<template>
  <div class="assiatant">
    <el-row>
      <el-col :span="6">
        <!-- 智能助手（左） -->
        <div class="grid-content bg-purple">
          <div class="ass_left">
            <h2>智能助手</h2>
            <div>
              <img :src="icons.assPic" alt="">
            </div>
            <div>
              <button>去处理</button>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="18">
        <!-- 智能助手选项卡（右） -->
        <div class="grid-content bg-purple-light">
          <div class="ass_right">
            <el-tabs type="border-card">
              <el-tab-pane label="全部事项">
                <!-- 全部事项组件 -->
                <Matters></Matters>
              </el-tab-pane>
              <el-tab-pane label="店铺基础">
                <Matters></Matters>
              </el-tab-pane>
              <el-tab-pane label="商品体验">
                <!-- 体验组件 -->
                <Experience></Experience>
              </el-tab-pane>
              <el-tab-pane label="物流体验">
                <Experience></Experience>
              </el-tab-pane>
              <el-tab-pane label="售后体验">
                <Experience></Experience>
              </el-tab-pane>
              <el-tab-pane label="服务体验">
                <Experience></Experience>
              </el-tab-pane>
              <el-tab-pane label="流量表现">
                <Matters></Matters>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { icons } from "@/assets/picture";
import Matters from "./Matters.vue";
import Experience from "./Experience.vue";

export default {
  name: "assistant",
  data: function() {
    return {
      icons
    };
  },
  components: {
    Matters,
    Experience
  }
};
</script>

<style lang="scss" scoped>
.assiatant {
  margin-top: 10px;
  .ass_left {
    width: 100%;
    height: 300px;
    border-right: 1px solid #e5e5e5;
    margin: 0 30px 4px 0;
    > h2 {
      font-size: 16px;
      font-weight: 900;
      color: #323233;
      padding: 10px 0px 0px 5px;
    }
    > div {
      width: 144px;
      height: 144px;
      margin: 30px 60px 0px;
      text-align: center;
      > img {
        width: 100%;
        height: 100%;
      }
      button {
        border: 0;
        background-color: transparent;
        outline: none;
        width: 90px;
        height: 32px;
        background: #155bd4;
      }
    }
  }
  .ass_right {
    height: 296px;
    padding: 10px 0px;
  }
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple {
  background: rgb(255, 255, 255);
}
.grid-content {
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  // background-color: #f9fafc;
}
</style>

