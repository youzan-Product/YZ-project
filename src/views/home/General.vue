<template>
  <div class="general">
    <Mainheader></Mainheader>
    <el-row :gutter="20">
      <el-col :span="20">
        <!-- 内容区 -->
        <div class="grid-content bg-purple">
          <!-- 隐藏显示 -->
          <Down></Down>
          <!-- 实时概况 -->
          <RealTime></RealTime>
          <!-- 智能助手 -->
          <Assistant></Assistant>
          <!-- 常用功能 -->
          <Tool></Tool>
          <!-- 更多推荐 -->
          <Recom></Recom>
          <!-- 营销推荐 -->
          <Advice></Advice>
          <!-- 底部 -->
          <div class="gen_foot">
            <div>
              <img :src="icons.footerPic" alt="">
            </div>
          </div>
        </div>
      </el-col>

      <el-col :span="4">
        <!-- 右边栏区 -->
        <div class="grid-content bg-purple">
          <div class="learn">
            <img :src="icons.learnPic" alt="">
          </div>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import Mainheader from "@/components/Mainheader.vue";
import Down from "./Down.vue";
import RealTime from "./RealTime.vue";
import Assistant from "./Assistant.vue";
import Tool from "./Tool.vue";
import Recom from "./Recom.vue";
import Advice from "./Advice.vue";
import { icons } from "@/assets/picture";

export default {
  name: "general",
  data: function() {
    return {
      icons
    };
  },
  components: {
    Mainheader,
    Down,
    RealTime,
    Assistant,
    Tool,
    Advice,
    Recom
  }
};
</script>
<style lang="scss" scoped>
.gen_foot {
  width: 100%;
  height: 40px;
  position: relative;
  margin-top: 20px;
  > div {
    width: 160px;
    position: absolute;
    top: 0px;
    left: 45%;
  }
}
.learn {
  height: 200px;
  margin:20px 0px 20px 0px;

  > img {
    width: 100%;
    height: 100%;
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
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
}
</style>

