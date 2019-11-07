<template>
    <div class="tools">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <div class="tool_box">
                        <div class="tool_header">
                            <div>常用功能</div>
                            <div>编辑</div>
                        </div>
                        <div>
                            <div class="tool_con" v-for="(item,idx) in toolsList" :key="idx">
                                <i :class="item.iconName"></i>
                                <span v-text="item.toolsName">发布商品</span>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "tool",
  computed: {
    ...mapState(["toolsList"])
  },
  mounted() {
    this.getToolsList();
  },
  methods: {
    ...mapActions(["getToolsList"]),
    ...mapMutations(["updateToolsList"])
  }
};
</script>

<style lang="scss" scoped>
.tools {
  width: 100%;
  height: 179px;
  margin-top: 20px;
  .tool_box {
    // height: 179px;
    background: rgb(255, 255, 255);
    margin: 0px 0px 20px;
    padding: 20px 20px 30px;
    > .tool_header {
      height: 21px;
      padding-left: 5px;
      > div:nth-child(1) {
        color: #323233;
        font-size: 16px;
        font-weight: bold;
        float: left;
      }
      > div:nth-child(2) {
        float: right;
        font-size: 14px;
        color: #155bd4;
        cursor: pointer;
      }
    }
    > div {
      width: 100%;
      height: 108px;
      > .tool_con {
        margin-top: 24px;
        padding-left: 35px;
        width: 20%;
        font-size: 14px;
        color: #323233;
        height: 30px;
        line-height: 30px;
        display: flex;
        align-items: center;
        float: left;
        overflow: hidden;
        > i {
          font-size: 30px;
          margin-right: 10px;
          color: rgb(0, 191, 86);
        }
      }
    }
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
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

